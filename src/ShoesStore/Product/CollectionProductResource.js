import {hal, HalTemplate} from "@fusion.io/framework";
import ProductResource    from "./ProductResource";

@hal(() => '/api/v1/products')
export default class CollectionProductResource extends HalTemplate{

    render(products) {
        this.state('products', products.map(product => new ProductResource().compile(product)));
    }
}
