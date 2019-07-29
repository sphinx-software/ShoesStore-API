import {bind, form} from "@fusion.io/framework";
import Form from "../Form";

@bind()
@form({
    role    : 'required'
})
export default class RoleForm extends Form {

    getName() {
        return 'roleForm';
    }
}
