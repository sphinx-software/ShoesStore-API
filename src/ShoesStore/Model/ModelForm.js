import {form,bind} from "@fusion.io/framework";
import Form from "../Form";

@bind()
@form({
    name:"required",
    price:"required",
    description:"required",
    sizes:"required",
    colors:"required",
    images:"required|url",

})
export default class ModelForm extends Form{

    getName() {
        return "modelForm"
    }
}
