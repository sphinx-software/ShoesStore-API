import {bind, form} from "@fusion.io/framework";
import Form from "../Form";

@bind()
@form({
    profile_id: 'required',
    order_date: 'required',
    payment_method: 'required',
    status: 'required',
    shipped_date: 'required',
    customer_name: 'required',
    address: 'required',
    phone: 'required'
})
export default class OrderForm extends Form {
    getName() {
        return 'orderForm';
    }
}
