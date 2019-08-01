import {hal, HalTemplate} from "@fusion.io/framework";

@hal(credential => "/api/v1/credentials/" + credential.id)
export default class CredentialResource extends HalTemplate {
    render(credential) {
        this.state('data', credential.toJSON());
    }
}

