import {hal, HalTemplate} from "@fusion.io/framework";


@hal(orderProduct => "/api/v1/orders/" + orderProduct.id)
export default class BillProductResource extends HalTemplate{

    render(orderProduct) {
        this.state('data', orderProduct.toJSON());
    }
}
