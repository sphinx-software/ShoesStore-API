import {hal, HalTemplate} from "@fusion.io/framework";
import CollectionResource from "./CollectionResource";

@hal(() => '/api/v1/collections')
export default class Collections extends HalTemplate{
    render(collections) {
        this
            .state('collections', collections.map((collection) => new CollectionResource().compile(collection)))
        ;
    }
}