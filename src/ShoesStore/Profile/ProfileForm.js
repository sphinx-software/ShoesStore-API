import {bind, form} from "@fusion.io/framework";
import Form from "../Form";

@bind()
@form({
    name    : 'required',
    phone   : 'required|phone',
    address : 'required',
    avatar  : 'required|url',
    gender  : 'required|boolean',
    dob     : 'required'
})
export default class ProfileForm extends Form {

    getName() {
        return 'profileForm';
    }
}
