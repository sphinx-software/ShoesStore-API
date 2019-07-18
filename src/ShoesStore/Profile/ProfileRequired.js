import {singleton} from '@fusion.io/framework';
import Profile from "./Profile";
import ResourceNotFound from "../ResourceNotFound";

@singleton()
export default class ProfileRequired {
    async handle(context, next) {

        const profile = await Profile.query().findById(context.params.id);
        if (!profile) {
            context.status = 404;
            return await context.render(ResourceNotFound, {url: context.path});
        }

        context.profile = profile;
        await next();
    }
}