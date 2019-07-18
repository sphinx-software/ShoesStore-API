import {hal, HalTemplate} from "@fusion.io/framework";

@hal((product) => '/products/' + product.id)
export default class ProductResource extends HalTemplate {

    render(product) {
        this.state("data", product.toJSON());
    }
}
