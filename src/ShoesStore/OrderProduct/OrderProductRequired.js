import {singleton} from "@fusion.io/framework";
import OrderProduct from "./OrderProduct";
import ResourceNotFound from "../ResourceNotFound";


@singleton()
export default class OrderProductRequired {

    async handle(context, next) {
        const orderProduct = await OrderProduct.query().findById(context.params.id);

        if (!orderProduct) {
            context.status = 404;
            return await context.render(ResourceNotFound, {url: context.path});
        }
        context.orderProduct = orderProduct;
        await next();
    }
}
