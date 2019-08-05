import moment from "moment";

export default class PostgresRepository {
    constructor (connection, factory, paginator) {
        this.connection = connection;
        this.factory    = factory;
        this.paginator  = paginator
    }

    get tableName () {
        return "repository";
    }

    get returningColumn () {
        return ["id", "created_at"];
    }

    async create (object) {
        const result = await this.connection.insert(object).into(this.tableName).returning(this.returningColumn);
        return this.factory.factory(result[0]);
    }

    async update (condition, object) {
        const result = await this.connection.update(object).where(condition).from(this.tableName).returning(this.returningColumn);
        return this.factory.factory(result[0]);
    }

    delete (condition) {
        return this.connection.update({
            deleted_at: moment().toDate()
        }).where(condition).from(this.tableName)
    }

    destroy (condition) {
        return this.connection(this.tableName).where(condition).del()
    }

    async detail (selection, condition) {
        const result = await this.connection.select(selection).from(this.tableName).where(condition).limit(1);
        return this.factory.factory(result.shift());
    }

    async get (condition, selection, pagination) {
        const query = this.connection.select(selection).from(this.tableName).where(condition).limit().offset();
    }
}
