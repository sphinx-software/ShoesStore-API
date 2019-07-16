import {hal, HalTemplate} from "@fusion.io/framework";
import ProfileResource from "./ProfileResource";

@hal(() => '/api/v1/profiles')
export default class ProfileCollection extends HalTemplate{
        render(profiles) {
            this
                .state('profiles', profiles.map((profile) => new ProfileResource().compile(profile)))
            ;
        }
}
