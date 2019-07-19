import {singleton} from "@fusion.io/framework"
import Model from "./Model";
import ResourceNotFound from "../ResourceNotFound";

@singleton()
export default class ModelRequired {
    async handle(context, next) {
        const model = await Model
            .query()
            .select('models.*','collections.*')
            .includeTrash()
            .join('collections', 'models.collection_id', 'collections.id')
            .findById(context.params.id)
        ;

        if (!model) {
            context.status = 404;
            context.render(ResourceNotFound, {url: context.path});
        }

        context.model = model;
        await next();
    }
}
