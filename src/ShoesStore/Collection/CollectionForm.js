import {bind, form} from "@fusion.io/framework";
import Form from "../Form";

@bind()
@form({
    name: 'required|minlength:6',
    slug: 'required'
})
export default class CollectionForm extends Form {

    getName() {
        return 'collectionForm';
    }
}

