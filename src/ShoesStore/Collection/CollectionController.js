import {get, post, singleton, del, middleware, put} from "@fusion.io/framework"
import Collection from "./Collection";
import CollectionResource from "./CollectionResource";
import CollectionForm from "./CollectionForm";
import LoginRequired from "../LoginRequired";
import CollectionRequired from "./CollectionRequired";
import Collections from "./Collections"


@singleton()
export default class CollectionController {

    @get('/collections/:id')
    async detail(context) {
        const collection = await Collection.findOrFail(context.params.id);
        return await context.render(CollectionResource, collection)
    }

    @get('/collections')
    async get(context) {
        const collections = await Collection.query();

        return await context.render(Collections, collections)
    }

    @middleware(CollectionForm)
    @post('/collections')
    async create(context) {
        let collectionProduct = await Collection.query()
            .insert({...context.collectionForm})
        ;

        context.status = 201;
        await context.render(CollectionResource, collectionProduct);
    }

    @middleware(CollectionRequired, CollectionForm)
    @put('/collections/:id')
    async update(context) {
        const collection = context.collection;

        await collection.$query().patch({...context.collectionForm});

        context.status = 200;
        return context.render(CollectionResource, collection)
    }

    @middleware(CollectionRequired)
    @del('/collections/:id')
    async delete(context) {
        const collection = context.collection;

        await collection.$query().delete();
        return await context.render(CollectionResource, collection)

    }

}