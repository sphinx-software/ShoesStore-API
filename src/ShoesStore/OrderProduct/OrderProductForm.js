import {bind, form} from "@fusion.io/framework";
import Form from "../Form";

@bind()
@form({
    order_id: 'required',
    product_id: 'required',
    quantity: 'required|numeric',
    price:    'required|numeric',
    name:     'required|minlength:6',
    size:     'required',
    color:    'required'
})
export default class OrderProductForm extends Form{

    getName() {
        return 'orderProductForm';
    }
}
