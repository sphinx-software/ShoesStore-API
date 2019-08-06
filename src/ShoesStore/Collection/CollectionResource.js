import {hal, HalTemplate} from "@fusion.io/framework";

@hal(collectionProduct => "/api/v1/collections/" + collectionProduct.id)
export default class CollectionResource extends HalTemplate {

    render(collection) {
        this.state('collection', collection);
    }
}
