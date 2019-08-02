import {get, post, del, put, singleton, middleware} from "@fusion.io/framework"
import Profile from "./Profile";
import ProfileResource from "./ProfileResource";
import ProfileCollection from "./ProfileCollection";
import ProfileForm from "./ProfileForm";
import ProfileRequired from "./ProfileRequired";
import Credential from "../Credential/Credential";
import LoginRequired from "../LoginRequired";

@singleton()
export default class ProfileController {

    @middleware(ProfileRequired)
    @get('/profiles/:id')
    async detail(context) {
        context.status = 201;
        return await context.render(ProfileResource, context.profile);
    }

    @get('/profiles')
    async get(context) {
        const profiles = await Profile.query()
            .select('profiles.*', 'credentials.id',
                'credentials.username', 'credentials.role',
                'credentials.email', 'credentials.external_login'
            )
            .includeTrash()
            .join('credentials', 'profiles.credential_id', 'credentials.id')
            .where('profiles.deletedAt', null)
        ;
        context.status = 201;
        return await context.render(ProfileCollection, profiles)
    }

    @middleware(ProfileRequired, ProfileForm)
    @put('/profiles/:id')
    async update(context) {
        const profile = context.profile;

        await profile.$query().patch(context.profileForm);

        context.status = 200;
        return await context.render(ProfileResource, profile)
    }

    @middleware(ProfileForm)
    @post('/profiles')
    async create(context) {
        let profile = await Profile.query()
            .insert(context.profileForm);
        context.status = 201;
        await context.render(ProfileResource, profile);
    }

    @middleware(ProfileRequired)
    @del('/profiles/:id')
    async delete(context) {
        const profile = context.profile;
        await profile.$query().delete();

        const credential = await Credential.query().findById(profile.credentialId);
        await credential.$query().delete();
        return await context.render(ProfileResource, profile);
    }

}
