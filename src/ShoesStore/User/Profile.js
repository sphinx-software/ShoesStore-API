import {Model} from "objection";

export default class Profile extends Model {
    static get tableName() {
        return 'profiles'
    }

    printName() {
        return this.name.toUpperCase()
    }
}
