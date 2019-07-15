import {get, post, singleton, middleware} from "@fusion.io/framework";
import ProductRepository from "./ProductRepository";
import ProductResource from "./ProductResource";
import CreateProductForm from "./CreateProductForm";

@singleton(ProductRepository)
export default class ProductController {

    constructor(repository) {
        this.repository = repository;
    }

    @get('/products/:id')
    async detail({params, render}) {
        const product = await this.repository.get(params.id);

        return await render(ProductResource, {product});
    }

    @middleware(CreateProductForm)
    @post('/products/:id')
    async create() {
        // TODO
    }
}