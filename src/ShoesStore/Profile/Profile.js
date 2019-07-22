import {Model, type} from "@fusion.io/objection-binding";
import hasTimestamps from "@fusion.io/objection-binding/abilities/hasTimestamps";
import softDelete    from "@fusion.io/objection-binding/abilities/softDelete";
import DateTime      from "@fusion.io/objection-binding/types/moment";

@type('dob', DateTime)
@softDelete()
@hasTimestamps()
export default class Profile extends Model {

}
