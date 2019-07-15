import {Model} from "objection";
import ModelNotFound from "../ModelNotFound";

export default class Profile extends Model {
    static get tableName() {
        return 'profiles'
    }

    static async findOrFail(id) {
        const model = await Profile.query().findById(id);

        if (!model) {
            throw new ModelNotFound()
        }

        return  model;
    }

    printName() {
        return this.name.toUpperCase()
    }
}
