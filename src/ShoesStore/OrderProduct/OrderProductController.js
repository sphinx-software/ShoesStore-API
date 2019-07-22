import {get, post, del, put, singleton, middleware} from "@fusion.io/framework";
import OrderProductRequired from "../OrderProduct/OrderProductRequired";
import OrderProductResource from "../OrderProduct/OrderProductResource";
import OrderProduct from "../OrderProduct/OrderProduct";
import OrderProductForm from "../OrderProduct/OrderProductForm";

@singleton()
export default class OrderProductController {

    @middleware(OrderProductRequired)
    @get('/OrderProducts/:id')
    async detail(context) {
        context.status = 201;
        return await context.render(OrderProductResource, context.OrderProduct);
    }
    

    @middleware(OrderProductRequired, OrderProductForm)
    @put('/OrderProducts/:id')
    async update(context) {
        const OrderProduct = context.OrderProduct;

        await OrderProduct.$query().patch(context.OrderProductForm);

        context.status = 200;
        return await context.render(OrderProductResource, OrderProduct)
    }

    @middleware(OrderProductForm)
    @post('/OrderProducts')
    async create(context) {
        let OrderProduct = await OrderProduct.query()
            .insert(context.OrderProductForm)
        ;

        context.status = 201;
        await context.render(OrderProductResource, OrderProduct);
    }

    @middleware(OrderProductRequired)
    @del('/OrderProducts/:id')
    async delete(context) {
        const OrderProduct = context.OrderProduct;
        await OrderProduct.$query().delete();
        return await context.render(OrderProductResource, OrderProduct);
    }
}
