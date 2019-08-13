import {Authenticator, FacebookIdentityProvider, JsonWebTokenIdentityProvider} from "@fusion.io/authenticate";
import {ServiceProvider} from "@fusion.io/framework";
import {Database, Validator} from "@fusion.io/framework/Contracts";
import CollectionRepository from "./Collection/Repository"
import UserProvider from "./UserProvider";

export default class ShoesStoreServiceProvider extends ServiceProvider {
    register () {
        const connection = (this.container.make(Database)).connection();
        this.container.singleton("CollectionRepository", () => {
            return new CollectionRepository(connection);
        });

        const authenticator = this.container.make(Authenticator);

        authenticator.connect('api.token', ({ privateKey }) => [new JsonWebTokenIdentityProvider(privateKey), new UserProvider()]);
        authenticator.connect('facebook', ({ graphAPIVersion }) => [new FacebookIdentityProvider(graphAPIVersion)]);
    }

    boot () {
        const validator = this.container.make(Validator);
        validator
            .register(
                "minlength",
                async (value, min) => !(value.length <= min)
            )
        ;
    }
}
