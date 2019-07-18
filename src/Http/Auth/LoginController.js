import { Authenticator } from "@fusion.io/passport-binding";
import {singleton, post } from "@fusion.io/framework";

@singleton(Authenticator)
export default class LoginController {

    constructor(auth) {
        this.auth = auth;
    }

    @post('/login')
    async login(context) {
        let user = await this.auth.authenticate('local', context);

        context.body = {
            user
        }
    }
}
