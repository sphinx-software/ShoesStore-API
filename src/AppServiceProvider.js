import {ServiceProvider, QueueRegistry} from "@fusion.io/framework";
import { IdentityPool } from "@fusion.io/passport-binding";
import Credential from "./Http/Auth/Credential";

export default class AppServiceProvider extends ServiceProvider {

    register() {

    }

    boot() {
        const pool = this.container.make(IdentityPool);

        pool.provideFor('local', async (username, password) => {
            return await Credential.query().first();
        });
    }
}
