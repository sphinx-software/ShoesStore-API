import {inject} from "@fusion.io/framework";
import ProductSeeder from "../../ShoesStore/Product/ProductSeeder.seeder";
import UserSeeder from "./UserSeeder.seeder";

export default class DatabaseSeeder {

    @inject()
    async seed() {
        //
        // await new ProductSeeder().seed()
        await new UserSeeder().seed();
    }
}
