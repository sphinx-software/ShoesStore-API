import {hal,HalTemplate} from "@fusion.io/framework"
import ProfileResource from "./ProfileResource";
import ProfileCollection from "./ProfileCollection";

@hal(() => "/api/v1/teams")
export default class TeamResource extends HalTemplate {
    render() {
        this
            .embed('leader', ProfileResource, {})
            .embed('member', ProfileCollection, [])
    }
}
