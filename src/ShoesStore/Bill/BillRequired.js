import {singleton}      from "@fusion.io/framework";
import Bill            from "./Bill";
import ResourceNotFound from "../ResourceNotFound";

@singleton()
export default class BillRequired {
    async handle(context, next) {
        const bill = await Bill.query().findById(context.params.id)
            .select('*');
        if(!bill) {
            context.status = 404;
            return await context.render(ResourceNotFound, {url: context.path});
        }
        context.bill = bill;
        await next();
    }
}