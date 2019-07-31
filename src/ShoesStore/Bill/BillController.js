import {get, post,
        put, del,
        singleton, middleware}
                            from "@fusion.io/framework";
import Bill                from "./Bill";
import BillRequired        from "./BillRequired";
import BillResource        from "./BillResource";
import BillCollection      from "./BillCollection";
import BillForm            from "./BillForm";
import BillProduct         from "../BillProduct/BillProduct";

@singleton()
export default class BillController {
    @middleware(BillRequired)
    @get("/bills/:id")
    async detail(context) {
        context.status = 200;
        return await context.render(BillResource, context.bill);
    }

    @get("/bills")
    async get(context) {
        const bills = await Bill.query();
        context.status = 200;
        return await context.render(BillCollection, bills);
    }

    @middleware(BillForm)
    @post("/bills")
    async create (context) {
        const bill = await Bill.query().insert(context.billForm);
        await context.render(BillResource, bill);
    }

    @middleware(BillRequired)
    @middleware(BillForm)
    @put("/bills/:id")
    async update (context) {
        const bill = context.bill;

        await bill.$query().patch(context.billForm);
        context.status = 200;
        await context.render(BillResource, context.bill);
    }

    @middleware(BillRequired)
    @del("/bills/:id")
    async delete (context) {
        const bill = context.bill;
        const billProducts = await BillProduct.query().where('bill_id', bill.id);

        billProducts.map(async billProduct => await billProduct.$query().delete());
        await bill.$query().delete();
        await context.render(BillResource, bill);
    }
}
