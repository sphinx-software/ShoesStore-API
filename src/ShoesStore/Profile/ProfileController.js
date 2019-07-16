import {get,post,singleton, del} from "@fusion.io/framework"
import Profile from "./Profile";
import ProfileResource from "./ProfileResource";

@singleton()
export default class ProfileController {
    constructor(repos) {
        this.repos = repos;
    }

    @get('/profiles/:id')
    async detail(context) {
        const profile = await Profile.findOrFail(context.params.id);
        return await context.render(ProfileResource, profile)
    }

    @post('/profiles')
    async create() {
        const profile = await Profile
            .query()
            .insert({
                name            :"linhdz",
                email           :"linh.dev@gmail.com",
                phone           :"0987654421",
                gender          :"nam",
                avatar          :"avatar",
                credential_id   :1,
                address         :['Ha Noi'],
                created_at       :"12/05/2018",
                updated_at       :"12/05/2019",
                delete_at       :false
            });
    }
    @del('/profiles/:id')
    async delete(context) {
        await Profile.query().deleteById(context.params.id);
    }
}