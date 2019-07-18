import {singleton} from "@fusion.io/framework";
import Product from "./Product";
import ResourceNotFound from "../ResourceNotFound";

@singleton()
export default class ProductRequired {
    async handle(context, next) {

        const product = await Product.query().findById(context.params.id);

        if (!product) {
            context.status = 404;
            return context.render(ResourceNotFound, {url:context.path});
        }
        context.product = product;
        await next();
    }
}