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
        const models = await Model.query();

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
        await model.$query().delete();

        context.status = 200;
        return await context.render(ModelResource, model);
    }
}
