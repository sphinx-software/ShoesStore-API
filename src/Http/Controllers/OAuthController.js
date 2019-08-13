import {get, middleware, singleton} from "@fusion.io/framework";
import authenticate from "../../Authentication/authenticate";

@singleton()
export default class OAuthController {

    @get('/facebook/callback')
    @middleware(authenticate('facebook'))
    async callback(context) {
        context.body = context.identity;
    }
}