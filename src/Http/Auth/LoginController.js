import { Authenticator } from "@fusion.io/passport-binding";
import {singleton, post } from "@fusion.io/framework";
import { Hasher } from "@fusion.io/framework/Contracts"
import hat from "hat";
import Credential from "../../ShoesStore/Credential/Credential";

@singleton(Authenticator, Hasher)
export default class LoginController {

    constructor(auth, hasher) {
        this.auth   = auth;
        this.hasher = hasher;
    }

    @post('/login')
    async login(context) {
        let id = await this.auth.authenticate('local', context);
        let privateKey  = hat();
        let publicKey   = hat();

        let hashedPrivateKey = await this.hasher.hash(privateKey);

        await Credential.query().patch({apiToken: publicKey + '.' +  hashedPrivateKey}).where({id});

        context.body = {
            token: publicKey + '.' + privateKey
        }
    }
}
