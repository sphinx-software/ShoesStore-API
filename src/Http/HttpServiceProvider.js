import {
    HttpServiceProvider as FrameworkProvider,
    ServeStatic,
    AccessLogger,
    RenderView,
    RenderHalView
} from "@fusion.io/framework";


import CollectionController  from "./Controllers/CollectionController"
import KoaBody               from "koa-bodyparser";
import LoginController       from "./Auth/LoginController";
import cors                  from "@koa/cors";

/**
 * Our HttpServiceProvider, here we can specify how our Http layer works.
 *
 */
export default class HttpServiceProvider extends FrameworkProvider {

    /**
     * List of the global middleware.
     * It will be applied in the whole application.
     *
     * @return {*[]}
     */
    globalMiddlewares () {
        return [
            cors({"Origin": "*"}),
            AccessLogger,
            ServeStatic,
            RenderView,
            KoaBody()
        ]
    }

    /**
     * This is a universal place for grouping your middlewares
     * into a logical unit. So you can re-use it in several places.
     *messages
     * @return {{api: Array, web: *[]}}
     */
    middlewareGroups () {
        return {
            "api": [
                RenderHalView
            ],
            "collections": [
                RenderHalView
            ]
        }
    }

    /**
     * Define your routes here.
     *
     * @param router
     */
    routing (router) {
        router
            .group({
                middleware: "api",
                prefix    : "/api/v1"
            }, router => this.apiRouting(router))
            .group({middleware: "collections"}, router => this.collectionsRouting(router))
        ;
    }

    /**
     *
     * @param router
     */
    apiRouting (router) {
        router
            .controller(CollectionController)

        ;
    }

    /**
     *
     * @param router
     */
    collectionsRouting (router) {
        router
            .controller(CollectionController)
        ;
    }
}
