import Credential from "./Credential/Credential";
import {singleton, inject} from "@fusion.io/framework";
import {Authenticator} from "@fusion.io/passport-binding";

@singleton()
export default class LoginRequired {

    @inject(Authenticator)
    async handle(context, next, auth) {
        const id = await auth.authenticate('token', context);

        context.id = id;
        context.user = () => Credential.query().findById(id);

        await next();
    }
}
