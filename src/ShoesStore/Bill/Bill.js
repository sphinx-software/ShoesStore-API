import {Model}       from "@fusion.io/objection-binding";
import hasTimestamps from "@fusion.io/objection-binding/abilities/hasTimestamps";
import softDelete    from "@fusion.io/objection-binding/abilities/softDelete";


@hasTimestamps()
@softDelete()
export default class Bill extends Model {

}
