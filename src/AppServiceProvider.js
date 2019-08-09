import {ServiceProvider} from "@fusion.io/framework";
import {IdentityPool} from "@fusion.io/passport-binding";
import Credential from "./Http/Auth/Credential";
import {inject}     from "@fusion.io/framework";
import {Hasher}     from "@fusion.io/framework/Contracts"
export default class AppServiceProvider extends ServiceProvider {

    register() {

    }
    @inject(Hasher)
    boot(hasher) {
        const pool = this.container.make(IdentityPool);

        pool.provideFor('local', async (username, password) => {

            let user = await Credential.query().where('username', '=', username).first();
            if (user && await user.verify(password)) {
                return user.id;
            }
            return false;

        });

        pool.provideFor('token', async token => {
            let [publicKey, privateKey] = token.split('.');
            let user = await Credential.query().where('apiToken', 'like', publicKey + '.%').first();

            if (user && await user.verifyToken(privateKey)) {
                return user.id;
            }

            return false;
        })
    }
}
