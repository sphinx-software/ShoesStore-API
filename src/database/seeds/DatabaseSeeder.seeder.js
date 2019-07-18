import {inject} from "@fusion.io/framework";
import UserSeeder from "./UserSeeder.seeder";
import CredentialSeeder from "./CredentialSeeder.seeder";
import CollectionsSeeder from "./CollectionsSeeder.seeder"

export default class DatabaseSeeder {

    @inject()
    async seed() {
        await new UserSeeder().seed();
        await new CredentialSeeder().seed();
        await new CollectionsSeeder().seed();
    }
}
