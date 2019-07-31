import {singleton} from "@fusion.io/framework"
import Model from "./Model";
import ResourceNotFound from "../ResourceNotFound";

@singleton()
export default class ModelRequired {
    async handle(context, next) {
        const model = await Model
            .query()
            .select('models.*', 'collections.parent_id', 'collections.name as collection_name',
                'collections.slug as collection_slug', 'collections.related_slugs')
            .includeTrash()
            .join('collections','models.collection_id','collections.id')
            .findById(context.params.id)
            .where('models.deletedAt', null)

        ;

        if (!model) {
            context.status = 404;
            context.render(ResourceNotFound, {url: context.path});
        }

        context.model = model;
        await next();
    }
}
