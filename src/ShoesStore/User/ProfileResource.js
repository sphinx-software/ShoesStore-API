import {hal, HalTemplate} from "@fusion.io/framework";
import CredentialResource from "./CredentialResource";

@hal(profile => "/api/v1/profiles/" + profile.id)
export default class ProfileResource extends HalTemplate {
    render(profile) {
        this
            .state("id", profile.id)
            .state('name', profile.name)
            .state('phone', profile.phone)
            .state('gender', profile.gender)
            .state('avatar', profile.avatar)
            .state('address', profile.address)
            .embed('credential', CredentialResource, profile)
        ;
    }
}
