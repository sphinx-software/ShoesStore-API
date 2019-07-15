import {inject} from "@fusion.io/framework";
import ProductSeeder from "../../Product/ProductSeeder.seeder";

export default class DatabaseSeeder {

    @inject()
    async seed() {
        //
        await new ProductSeeder().seed()
    }
}
