import {bind, form} from "@fusion.io/framework";
import Form         from "../../Http/Middlewares/Form";

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

