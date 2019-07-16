import {bind, form} from "@fusion.io/framework";
import Form from "../Form";

@bind()
@form({
    name    : 'required',
    email   : 'required|email|profile.email.unique',
    phone   : 'required|phone',
    address : 'required',
    avatar  :'required|url',
    gender  :'required|boolean'
})
export default class ProfileForm extends Form {

    getName() {
        return 'profileForm';
    }
}
