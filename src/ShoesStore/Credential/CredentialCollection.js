import {hal, HalTemplate} from "@fusion.io/framework";
import CredentialResource from "./CredentialResource";
@hal(() => '/api/v1/credentials')
export default class CredentialCollection extends HalTemplate{
    render(credentials) {
        this
            .state('profiles', credentials.map((credential) => new CredentialResource().compile(credential)))
        ;
    }
}
