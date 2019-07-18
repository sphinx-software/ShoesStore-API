import {form,bind} from "@fusion.io/framework";
import Form from "../Form";

@bind()
@form({
    size: 'required',
    color:'required',
    quantity:'required',
    unit_price:'required'
})
export default class ProductForm extends Form {

    getName() {
        return 'productForm';
    }
}
