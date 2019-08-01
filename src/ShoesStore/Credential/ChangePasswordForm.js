import {bind, form} from "@fusion.io/framework";
import Form from "../Form";

@bind()
@form({
    password    : 'required',
    newpassword   : 'required',
    confirmpassword : 'required',
})
export default class ChangePasswordForm extends Form {

    getName() {
        return 'changepasswordform';
    }
}
