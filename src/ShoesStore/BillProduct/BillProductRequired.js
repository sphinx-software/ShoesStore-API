import {singleton} from "@fusion.io/framework";
import BillProduct from "./BillProduct";
import ResourceNotFound from "../ResourceNotFound";


@singleton()
export default class BillProductRequired {

    async handle(context, next) {
        const billProduct = await BillProduct.query().findById(context.params.id);

        if (!billProduct) {
            context.status = 404;
            return await context.render(ResourceNotFound, {url: context.path});
        }
        context.billProduct = billProduct ;
        await next();
    }
}
