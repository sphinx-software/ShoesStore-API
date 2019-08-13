import {Authenticator, Gateway, KoaLocal, KoaOAuth2, KoaSession, KoaToken} from "@fusion.io/authenticate";
import {ServiceProvider} from "@fusion.io/framework";
import {Config} from "@fusion.io/framework/Contracts";

export default class AuthenticationServiceProvider extends ServiceProvider {
    register() {
        /**
         * @type Authenticator
         */
        const authenticator = new Authenticator();

        authenticator
            .supporting('oauth2', (options) => new Gateway(new KoaOAuth2(options)))
            .supporting('token', (options) => new Gateway(new KoaToken(options)))
            .supporting('session', (options) => new Gateway(new KoaSession(options)))
            .supporting('local', (options) => new Gateway(new KoaLocal(options)))
        ;

        this.container.value(Authenticator, authenticator);
    }

    boot() {
        this.container.make(Authenticator).bootstrap(this.container.make(Config).get('authenticate'))
    }
}
