import {container, get, middleware, singleton} from "@fusion.io/framework"
import authenticate from "../../Authentication/authenticate";
import CollectionRequired from "./../Middlewares/Collection/CollectionRequired";

@singleton()
export default class CollectionController {

    constructor() {
        this.repository = container.make("CollectionRepository");
    }

    @get("/collections/:id")
    @middleware(authenticate('api.token'), CollectionRequired)
    async detail (context) {
        context.body = context.identity;
        // context.body = {"foobar": "foobar222"};
        // return await context.render(CollectionResource, context.collection)
    }
}
