import {singleton} from "@fusion.io/framework";
import Order from "./Order";
import ResourceNotFound from "../ResourceNotFound";

@singleton()
export default class OrderRequired {
    async handle(context, next) {
        const order = await Order.query().findById(context.params.id);

        if(!order) {
            context.status = 404;
            return await context.render(ResourceNotFound, {url: context.path});
        }
        console.log(order);
        context.order = order;
        await next();
    }
}
