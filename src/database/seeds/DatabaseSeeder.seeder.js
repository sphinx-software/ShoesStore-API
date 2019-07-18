import {inject} from "@fusion.io/framework";
import UserSeeder from "./UserSeeder.seeder";
import CredentialSeeder from "./CredentialSeeder.seeder";

export default class DatabaseSeeder {

    @inject()
    async seed() {
        //
        // await new ProductSeeder().seed()
        await new UserSeeder().seed();
        await new CredentialSeeder().seed();
    }
}
