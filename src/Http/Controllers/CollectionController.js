import CollectionResource from "../../ShoesStore/Collection/CollectionResource"
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

@singleton()
export default class CollectionController {

    constructor() {
        this.repository = container.make("CollectionRepository");
    }

    @get("/collections/:id")
    @middleware(CollectionRequired)
    async detail (context) {
        // context.body = {"foobar": "foobar"};
        return await context.render(CollectionResource, context.collection)
    }
}
