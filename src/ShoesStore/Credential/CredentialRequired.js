import {singleton} from '@fusion.io/framework';
import Credential from "./Credential";
import ResourceNotFound from "../ResourceNotFound";

@singleton()
export default class CredentialRequired {
    async handle (context, next) {
        const credential = await Credential.query().findById(context.params.id)
            .select('profiles.*', 'credentials.id',
                'credentials.username', 'credentials.role',
                'credentials.email', 'credentials.external_login'
            )
            .includeTrash()
            .join('profiles', 'profiles.credential_id', 'credentials.id')

        if (!credential) {
            context.status = 400;
            return await context.render(ResourceNotFound, {url: context.path});
        }

        context.credential = credential;
        await next();
    }

}