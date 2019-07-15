import {get,post,singleton} from "@fusion.io/framework"
import Profile from "./Profile";
import ProfileResource from "./ProfileResource";

@singleton()
export default class ProfileController {
    constructor(repos) {
        this.repos = repos;
    }

    @get('/profiles/:id')
    async detail(context) {
        const profile = await Profile.query().findById(context.params.id);
        return await context.render(ProfileResource, profile)
    }

    @post('/profiles')
    async create() {
        // await this.repos.create({
        //     name            :"linhdz",
        //     email           :"linh.dev@gmail.com",
        //     phone           :"0987654421",
        //     gender          :"nam",
        //     avatar          :"avatar",
        //     credential_id   :1,
        //     address         :['Ha Noi'],
        //     create_at       :"12/05/2018",
        //     update_at       :"12/05/2019",
        //     delete_at       :true
        // });
    }
}