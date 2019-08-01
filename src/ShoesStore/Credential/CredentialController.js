import {get, post, del, put, patch, singleton, middleware} from "@fusion.io/framework"
import Credential from "./Credential";
import CredentialResource from "./CredentialResource";
import CredentialRequired from "./CredentialRequired";
import CredentialCollection from "./CredentialCollection";
import ProfileRequired from "../Profile/ProfileRequired";
import roleFrom from "./roleFrom";
import Profile from "../Profile/Profile";

@singleton()
export default class CredentialController {

    @get('/credentials')
    async get(context) {
        const credentials = await Credential.query()
            .select('profiles.*', 'credentials.id',
                'credentials.username', 'credentials.role',
                'credentials.email', 'credentials.external_login'
            )
            .includeTrash()
            .join('profiles', 'profiles.credential_id', 'credentials.id')
            .where("credentials.deletedAt",null)
        ;
        console.log(credentials)
        context.status = 201;
        return await context.render(CredentialCollection, credentials)
    }

    @middleware(CredentialRequired)
    @get('/credentials/:id')
    async detail(context) {
        context.status = 201;
        return await context.render(CredentialResource, context.credential)
    }

    @middleware(CredentialRequired, roleFrom)
    @patch('/credentials/:id')
    async updateRole(context) {
        const credential = context.credential;

        await credential.$query().patch(context.roleForm);
        context.status = 200;
        return await context.render(CredentialResource, credential);
    }

    @middleware(CredentialRequired, ProfileRequired)
    @del('/credentials/:id')
    async delete(context) {
        const credential = context.credential;
        await credential.$query().delete();
        const profile = await Profile.query().includeTrash().findOne({
            credential_id: credential.id
        });
        await profile.$query().delete();

        return await context.render(CredentialResource, credential)
    }
}

