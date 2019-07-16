import Credential from "../Http/Auth/Credential";
import {singleton} from "@fusion.io/framework";

@singleton()
export default class LoginRequired {
    async handle(context, next) {
        context.user = () =>  Credential.query().first();

        await next();
    }
}
