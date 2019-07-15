import {inject} from "@fusion.io/framework";
import ProductRepository from "./ProductRepository";
import Product from "./Product";

export default class ProductSeeder{

    @inject(ProductRepository)
    async seed(repo) {
        //
        console.log('seeding a product');
        await repo.add(new Product());
    }
}
