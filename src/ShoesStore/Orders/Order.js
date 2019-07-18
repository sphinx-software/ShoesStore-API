import {Model, type} from "@fusion.io/objection-binding";
import hasTimestamps from "@fusion.io/objection-binding/abilities/hasTimestamps";
import DateTime from "@fusion.io/objection-binding/types/moment";
import softDelete from "@fusion.io/objection-binding/abilities/softDelete";

@type('orderDate', DateTime)
@type('shippedDate', DateTime)
@hasTimestamps()
@softDelete()
export default class Order extends Model{

}