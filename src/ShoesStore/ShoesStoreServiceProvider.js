import {ServiceProvider} from "@fusion.io/framework";
import {Validator} from "@fusion.io/framework/Contracts";
import Profile from "./Profile/Profile";

export default class ShoesStoreServiceProvider extends ServiceProvider {
    register() {
    }

    boot() {
        const validator = this.container.make(Validator);

        validator
            .register(
                'profile.email.unique',
                async email => !await Profile.query().where({email}).first()
            )
            .register(
                'minlength',
                async (value, min) => !(value.length <= min)
            )
        ;
    }
}
