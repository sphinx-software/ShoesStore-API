import Factory from './Factory'
import Repository from "./../Repository"
export default class CollectionRepository extends Repository{
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
    async detail (selection, condition) {
        const result = await this.connection.select(selection).from(this.tableName).where(condition).first();
        return this.factory.build(result);
    }
}
