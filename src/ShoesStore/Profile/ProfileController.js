import {get,post,del,put,singleton} from "@fusion.io/framework"
import Profile from "./Profile";
import ProfileResource from "./ProfileResource";
import ProfileCollection from "./ProfileCollection";

@singleton()
export default class ProfileController {
    @get('/profiles/:id')
    async detail(context) {
        const profile = await Profile.findOrFail(context.params.id);
        return await context.render(ProfileResource, profile)
    }
    @get('/profiles')
    async get(context) {
        const profiles = await Profile.query().select('*');
        return await context.render(ProfileCollection, profiles)
    }
    @post('/profiles')
    async create(context) {
        const profile = await Profile
            .query()
            .insert({
                name            :context.request.body.name,
                email           :context.request.body.email,
                phone           :context.request.body.phone,
                gender          :context.request.body.gender,
                avatar          :context.request.body.avatar,
                credential_id   :context.request.body.credential_id,
                address         :context.request.body.address,
                created_at       :new Date(),
                updated_at       :new Date(),
                delete_at       :false
            });
    }
}