import {inject} from "@fusion.io/framework";
import UserSeeder from "./UserSeeder.seeder";
import CredentialSeeder from "./CredentialSeeder.seeder";
import CollectionsSeeder from "./CollectionsSeeder.seeder"
import ModelsSeeder from "./ModelsSeeder.seeder";
import ProductsSeeder from "./ProductsSeeder.seeder";
import OrderSeeder from "./OrderSeeder.seeder";

export default class DatabaseSeeder {

    @inject()
    async seed() {
        await new UserSeeder().seed();
        await new CredentialSeeder().seed();
        await new CollectionsSeeder().seed();
        await new ModelsSeeder().seed();
        await new OrderSeeder().seed();
        await new ProductsSeeder().seed();
    }
}
