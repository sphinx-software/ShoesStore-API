import {get, post, del, put, singleton, middleware} from "@fusion.io/framework"
import Profile from "./Profile";
import ProfileResource from "./ProfileResource";
import ProfileCollection from "./ProfileCollection";
import ProfileForm from "./ProfileForm";
import ProfileRequired from "./ProfileRequired";
import LoginRequired from "../LoginRequired";

@middleware(LoginRequired)
@singleton()
export default class ProfileController {
    @middleware(ProfileRequired)
    @get('/profiles/:id')
    async detail(context) {
        let user = await  context.user();
        console.log(user.id);
        return await context.render(ProfileResource, context.profile);
    }

    @get('/profiles')
    async get(context) {
        const profiles = await Profile.query().select('*');
        return await context.render(ProfileCollection, profiles)
    }

    @put('/profiles/:id')
    async update(context) {
        context.status = 200;
        await Profile.query().update({
            name: context.request.body.name,
            email: context.request.body.email,
            phone: context.request.body.phone,
            gender: context.request.body.gender,
            avatar: context.request.body.avatar,
            credential_id: context.request.body.credential_id,
            address: context.request.body.address,
            created_at: new Date(),
            updated_at: new Date(),
            delete_at: false
        }).where('id', context.params.id);
    }

    @middleware(ProfileForm)
    @post('/profiles')
    async create(context) {
        let user = await  context.user();
        let profile = await Profile.query().insert({
            name: context.request.body.name,
            email: context.request.body.email,
            phone: context.request.body.phone,
            gender: context.request.body.gender,
            avatar: context.request.body.avatar,
            credential_id: user.id,
            address: context.request.body.address,
            created_at: new Date(),
            updated_at: new Date(),
            delete_at: false
        });
        context.status = 201;
        await context.render(ProfileResource, profile);
    }

    @del('/profiles/:id')
    async delete(context) {
        await Profile.query().deleteById(context.params.id);
    }
}