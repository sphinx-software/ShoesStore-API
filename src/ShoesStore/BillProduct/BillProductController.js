import {get, post, del, put, singleton, middleware} from "@fusion.io/framework";
import BillProductRequired from "./BillProductRequired";
import BillProductResource from "./BillProductResource";
import BillProduct from "./BillProduct";
import BillProductForm from "./BillProductForm";

@singleton()
export default class BillProductController {

    @middleware(BillProductRequired)
    @get('/bills/products/:id')
    async detail(context) {
        context.status = 201;
        return await context.render(BillProductResource, context.billProduct);
    }
    

    @middleware(BillProductRequired, BillProductForm)
    @put('/bills/products/:id')
    async update(context) {
        const billProduct = context.billProduct;

        await billProduct.$query().patch(context.billProductForm);

        context.status = 200;
        return await context.render(BillProductResource, billProduct)
    }

    @middleware(BillProductForm)
    @post('/bills/products')
    async create(context) {
        let billProduct = await BillProduct.query()
            .insert(context.billProductForm)
        ;

        context.status = 201;
        await context.render(BillProductResource, billProduct);
    }

    @middleware(BillProductRequired)
    @del('/bills/products/:id')
    async delete(context) {
        const billProduct = context.billProduct;
        await billProduct.$query().delete();
        return await context.render(BillProductResource, billProduct);
    }
}
