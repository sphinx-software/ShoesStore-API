
import PostgresRepository from "../Repository";
import Factory from "./Factory"

export default class CollectionRepository extends PostgresRepository{
    constructor (connection) {
        super();
        this.connection = connection;
        this.factory = Factory;

    }
    get tableName () {
        return "collections";
    }

    get returningColumn () {
        return ["id", "created_at"];
    }

    async create (object) {
        const result = await this.connection.insert(object).into(this.tableName).returning(this.returningColumn);
        return this.factory.factory(result[0]);
    }

    async detail (selection, condition) {
        const result = await this.connection.select(selection).from(this.tableName).where(condition).first();
        return this.factory.build(result);
    }
}
