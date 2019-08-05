import {
    get,
    post,
    singleton,
    del,
    middleware,
    put
} from "@fusion.io/framework"
import CollectionRequired from "./../Middlewares/Collection/CollectionRequired";

@singleton()
export default class CollectionController {

    @get("/collections/:id")
    @middleware(CollectionRequired)
    async detail (context) {
    }
}
