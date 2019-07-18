import {hal, HalTemplate} from "@fusion.io/framework";

@hal(order => "/api/v1/order/" + order.id)
export default class OrderResource extends HalTemplate {
    render(order) {
        this.state('data', order.toJSON());
    }
}