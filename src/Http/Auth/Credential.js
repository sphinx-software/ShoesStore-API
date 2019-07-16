import {Model} from "objection";

export default class Credential extends Model {
    static get tableName() {
        return "credentials";
    }
}
