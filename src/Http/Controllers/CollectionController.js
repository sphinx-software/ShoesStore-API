import {container, get, middleware, singleton} from "@fusion.io/framework"
import CollectionResource from "../../ShoesStore/Collection/CollectionResource"
import CollectionRequired from "./../Middlewares/Collection/CollectionRequired";

@singleton()
export default class CollectionController {

    constructor() {
        this.repository = container.make("CollectionRepository");
    }

    @get("/collections/:id")
    @middleware(CollectionRequired)
    async detail (context) {
        // context.body = {"foobar": "foobar222"};
        return await context.render(CollectionResource, context.collection)
    }
}
