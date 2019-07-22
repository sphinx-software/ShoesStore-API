import {get, post,
        put, del,
        singleton, middleware}
                       from "@fusion.io/framework";
import Order           from "./Order";
import OrderRequired   from "./OrderRequired";
import OrderResource   from "./OrderResource";
import OrderCollection from "./OrderCollection";
import OrderForm       from "./OrderForm";

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
        const orders = await Order.query();
        context.status = 200;
        return await context.render(OrderCollection, orders);
    }

    @middleware(OrderForm)
    @post("/orders")
    async create (context) {
        const order = await Order.query().insert(context.orderForm);
        await context.render(OrderResource, order);
    }

    @middleware(OrderRequired)
    @middleware(OrderForm)
    @put("/orders/:id")
    async update (context) {
        const order = context.order;

        await order.$query().patch(context.orderForm);
        context.status = 200;
        await context.render(OrderResource, context.order);
    }

    @middleware(OrderRequired)
    @del("/orders/:id")
    async delete (context) {
        const order = context.order;

        await order.$query().delete();
        await context.render(OrderResource, order);
    }
}
