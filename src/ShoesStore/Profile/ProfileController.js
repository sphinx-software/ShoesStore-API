import {get, post, del, put, singleton, middleware} from "@fusion.io/framework"
import Profile from "./Profile";
import ProfileResource from "./ProfileResource";
import ProfileCollection from "./ProfileCollection";
import ProfileForm from "./ProfileForm";
import ProfileRequired from "./ProfileRequired";
import LoginRequired from "../LoginRequired";

@singleton()
@middleware(LoginRequired)
export default class ProfileController {

    @middleware(ProfileRequired)
    @get('/profiles/:id')
    async detail(context) {
        await context.user();
        return await context.render(ProfileResource, context.profile);
    }

    @get('/profiles')
    async get(context) {
        const profiles = await Profile.query();

        return await context.render(ProfileCollection, profiles)
    }

    @middleware(ProfileRequired, ProfileForm)
    @put('/profiles/:id')
    async update(context) {
        const profiles   = context.profile;

        await profiles.$query().patch({...context.profileForm});

        context.status = 200;
        return context.render(ProfileResource, profiles)
    }

    @middleware(ProfileForm)
    @post('/profiles')
    async create(context) {
        let profile = await Profile.query()
            .insert({...context.profileForm})
        ;
        console.log(context.profileForm);
        context.status = 201;
        await context.render(ProfileResource, profile);
    }

    @middleware(ProfileRequired)
    @del('/profiles/:id')
    async delete(context) {
        const profile = context.profile;

        await profile.$query().delete();
        return await context.render(ProfileResource, profile);
    }
}
