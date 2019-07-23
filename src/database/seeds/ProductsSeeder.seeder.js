import {inject} from "@fusion.io/framework";
import faker from "faker";
import Product from "../../ShoesStore/Product/Product";

export default class ProductsSeeder {

    @inject()
    async seed() {
        await Product.query().truncate();

        for (let i = 0; i <20 ; i++) {
            await Product.query().insert({
                model_id:1,
                size: 'S',
                color:faker.commerce.color(),
                quantity:faker.random.number(),
                unit_price:faker.random.number(),
            });
        }

    }
}
