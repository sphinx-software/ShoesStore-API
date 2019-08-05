import {
    singleton,
    container
}                       from "@fusion.io/framework";
import ResourceNotFound from "../ResourceNotFound";

@singleton()
export default class CollectionRequired {
    async handle (context, next) {
        const repository = container.make("CollectionRepository");
        console.log(repository);
        // const collection = await Collection.query().findById(context.params.id);
        //
        // if (!collection) {
        //     context.status = 404;
        //     return await context.render(ResourceNotFound, {url: context.path});
        // }
        //
        // context.collection = collection;
        await next();
    }
}
