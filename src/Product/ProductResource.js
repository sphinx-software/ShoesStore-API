import {hal, HalTemplate} from "@fusion.io/framework";

@hal(({product}) => '/products/' + product.getId())
export default class ProductResource extends HalTemplate {

    render({product}) {
        this.state("name", product.getName());
    }
}
