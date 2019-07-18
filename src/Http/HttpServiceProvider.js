import {
    HttpServiceProvider as FrameworkProvider,
    ServeStatic,
    StartSession,
    AccessLogger,
    RenderView,
    RenderNunjuckView,
    RenderHalView
} from "@fusion.io/framework";

import HelloWorldController from "./Controllers/HelloWorldController";
import WelcomeMesssage      from "../HAL/WelcomeMesssage";
import ProductController    from "../ShoesStore/Product/ProductController";
import ProfileController    from "../ShoesStore/Profile/ProfileController";
import OrderController      from "../ShoesStore/Orders/OrderController";
import KoaBody              from "koa-bodyparser";

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
    globalMiddlewares() {
        return [
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
    middlewareGroups() {
        return {
            "api": [
                RenderHalView
            ],

            "web": [
                StartSession,
                RenderNunjuckView
            ]
        }
    }

    /**
     * Define your routes here.
     *
     * @param router
     */
    routing(router) {
        router
            .group({middleware: 'api', prefix: '/api/v1'}, router => this.apiRouting(router))
            .group({middleware: 'web'}, router => this.webRouting(router))
        ;
    }

    /**
     *
     * @param router
     */
    webRouting(router) {
        router.controller(HelloWorldController);
    }

    /**
     *
     * @param router
     */
    apiRouting(router) {
        router
            .get('messages.welcome', '/messages/:id', async ctx => {
                await ctx.render(WelcomeMesssage, {message: 'Hello world', from: "Shoes store", id: ctx.params.id})
            })
            .controller(ProductController)
            .controller(ProfileController)
            .controller(OrderController)
        ;
    }
}
