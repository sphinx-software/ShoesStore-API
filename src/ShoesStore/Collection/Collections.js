import {hal, HalTemplate} from "@fusion.io/framework";
import CollectionResource from "./CollectionResource";

@hal(() => '/api/v1/collections')
export default class Collections extends HalTemplate{
    render(Collections) {
        this
            .state('Collections', Collections.map((Collection) => new CollectionResource().compile(Collection)))
        ;
    }
}