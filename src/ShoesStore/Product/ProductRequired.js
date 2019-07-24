import {singleton}      from "@fusion.io/framework";
import Product          from "./Product";
import ResourceNotFound from "../ResourceNotFound";

@singleton()
export default class ProductRequired {
    async handle(context, next) {

        const product = await Product
            .query().findById(context.params.id)
            .select('products.*', 'models.name',
                'models.description','models.images',
                'models.status','models.tags','models.slug',
                'collections.parent_id', 'collections.name as collection_name',
                'collections.slug as collection_slug', 'collections.related_slugs')
            .includeTrash()
            .join('models', 'products.model_id', 'models.id' )
            .join('collections', 'models.collection_id', 'collections.id')
        if (!product) {
            context.status = 404;
            return context.render(ResourceNotFound, {url:context.path});
        }
        context.product = product;
        await next();
    }
}