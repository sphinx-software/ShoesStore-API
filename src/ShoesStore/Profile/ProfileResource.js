import {hal, HalTemplate} from "@fusion.io/framework";

@hal(profile => "/api/v1/profiles/" + profile.id)
export default class ProfileResource extends HalTemplate {
    render(profile) {
        console.log(profile,profile.toJSON());
        this.state('data', profile.toJSON());
    }
}

