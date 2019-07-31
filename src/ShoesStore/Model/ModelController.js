import {
    get, post,
    put, del,
    singleton, middleware
}                               from "@fusion.io/framework";
import Model                    from "./Model";
import ModelForm                from "./ModelForm";
import ModelResource            from "./ModelResource";
import ModelRequired            from "./ModelRequired";
import CollectionModelResource  from "./CollectionModelResource";
import Product                  from "../Product/Product";

@singleton()
export default class ModelController {
    @middleware(ModelForm)
    @post('/models')
    async create(context) {
        const model = await Model.query().insert(context.modelForm);
        context.status = 200;
        return await context.render(ModelResource, model);
    }

    @middleware(ModelRequired)
    @get('/models/:id')
    async detail(context) {
        context.status = 200;
        return await context.render(ModelResource, context.model);
    }

    @get('/models')
    async get(context) {
        const models = await Model
            .query()
            .select('models.*', 'collections.parent_id', 'collections.name as collection_name',
                'collections.slug as collection_slug', 'collections.related_slugs')
            .includeTrash()
            .join('collections','models.collection_id','collections.id')
            .where('models.deletedAt', null)

        ;

        context.status = 200;
        await context.render(CollectionModelResource, models);
    }

    @middleware(ModelRequired, ModelForm)
    @put('/models/:id')
    async update(context) {
        const model = context.model;
        await model.$query().patch(context.modelForm);

        context.status = 200;
        return context.render(ModelResource, model);
    }

    @middleware(ModelRequired)
    @del("/models/:id")
    async del(context) {
        const model = context.model;
        const products = await Product.query().select('*').where('model_id', context.params.id);
        await model.$query().delete();
        products.map(async product => await product.$query().delete());

        context.status = 200;
        return await context.render(ModelResource, model);
    }
}
