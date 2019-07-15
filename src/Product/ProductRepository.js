import {singleton} from "@fusion.io/framework";
import {Database} from "@fusion.io/framework/Contracts";
import Product from "./Product";

@singleton(Database)
export default class ProductRepository {
    constructor(dbm) {
        this.dbm = dbm;
    }

    async get(productId) {
        return new Product(productId);
    }

    async add(product) {
        // TODO
        console.log('create a new product');

        return new Product(Math.round(Math.random() * 1000));
    }
}
