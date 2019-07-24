import {singleton} from '@fusion.io/framework';
import Profile from "./Profile";
import ResourceNotFound from "../ResourceNotFound";

@singleton()
export default class ProfileRequired {
    async handle(context, next) {

        const profile = await Profile.query().findById(context.params.id)
            .select('profiles.*',
                'credentials.username', 'credentials.role',
                'credentials.email', 'credentials.external_login'
            )
            .includeTrash()
            .join('credentials', 'profiles.credential_id', 'credentials.id')
        ;
        console.log(context.params.id);
        if (!profile) {
            console.log("aaaaaaaaaa00");
            context.status = 404;
            return await context.render(ResourceNotFound, {url: context.path});
        }
        context.profile = profile;
        await next();
    }
}