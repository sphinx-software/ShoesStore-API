import {hal, HalTemplate} from "@fusion.io/framework";

@hal(profile => "/api/v1/profile/credential/" + profile.id)
export default class CredentialResource extends HalTemplate {
    render(profile) {
        this
            .state('email', profile.email)
        ;
    }
}