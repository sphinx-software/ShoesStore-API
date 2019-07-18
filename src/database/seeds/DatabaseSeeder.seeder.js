import {inject} from "@fusion.io/framework";
import UserSeeder from "./UserSeeder.seeder";
import CredentailSeeder from "./CredentialSeeder.seeder"

export default class DatabaseSeeder {

    @inject()
    async seed() {
        await new CredentailSeeder().seed();
        await new UserSeeder().seed();
    }
}
