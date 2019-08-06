import {ServiceProvider}    from "@fusion.io/framework";
import {
    Validator,
    Database
}                           from "@fusion.io/framework/Contracts";
import CollectionRepository from "./Collection/Repository"

export default class ShoesStoreServiceProvider extends ServiceProvider {
    register () {
        const connection = (this.container.make(Database)).connection();
        this.container.singleton("CollectionRepository", () => {
            return new CollectionRepository(connection);
        });
    }

    boot () {
        const validator = this.container.make(Validator);

        validator
            // .register(
            //     "profile.email.unique",
            //     async email => !await Profile.query().where({email}).first()
            // )
            .register(
                "minlength",
                async (value, min) => !(value.length <= min)
            )
        ;
    }
}
