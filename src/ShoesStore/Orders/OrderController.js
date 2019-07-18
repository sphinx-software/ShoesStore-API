import {get, post, put, del, singleton, middleware} from "@fusion.io/framework";
import Orders from "./Order";
import OrderRequired from "./OrderRequired";
import OrderResource from "./OrderResource";
import OrderCollection from "./OrderCollection";
import OrderForm     from "./OrderForm";

@singleton()
export default class OrderController {
    @middleware(OrderRequired)
    @get("/orders/:id")
    async detail(context) {
        context.status = 200;
        return await context.render(OrderResource, context.order);
    }

    @get("/orders")
    async get(context) {
        const orders = await Orders.query();
        context.status = 200;
        return await context.render(OrderCollection, orders);
    }

    @middleware(OrderForm)
    @post("/orders")
    async create (context) {
        const order = Orders.query().insert({

        })
        return context.body =  await context.orderForm;
    }
}