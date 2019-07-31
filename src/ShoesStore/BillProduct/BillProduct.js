import {Model} from "@fusion.io/objection-binding";
import hasTimestamps from "@fusion.io/objection-binding/abilities/hasTimestamps";
import softDelete from "@fusion.io/objection-binding/abilities/softDelete";

@softDelete()
@hasTimestamps()
export default class BillProduct extends Model{

}
