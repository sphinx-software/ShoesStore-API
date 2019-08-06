import {
    get,
    post,
    singleton,
    del,
    middleware,
    put,
    container
} from "@fusion.io/framework"
import CollectionRequired from "./../Middlewares/Collection/CollectionRequired";
import CollectionResource from "../../ShoesStore/Collection/CollectionResource";
import CollectionForm     from "../../ShoesStore/Collection/CollectionForm"

@singleton()
export default class CollectionController {

    constructor() {
        this.repository = container.make("CollectionRepository");
    }

    @get("/collections/:id")
    @middleware(CollectionRequired)
    async detail (context) {
        return await context.render(CollectionResource, context.collection)
    }
    //
    // @middleware(CollectionForm)
    // @post('/collections')
    // async create(context) {
    //     let collectionProduct = await this.repository
    //         .insert({...context.collectionForm})
    //     ;
    //
    //     context.status = 201;
    //     await context.render(CollectionResource, collectionProduct);
    // }

}
