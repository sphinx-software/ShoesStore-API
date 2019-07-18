import {hal, HalTemplate} from "@fusion.io/framework";
import OrderResource from "./OrderResource";

@hal(() => "/api/v1/orders")
export default class OrderCollection extends HalTemplate {
    render(orders) {
        this.state("data", orders.map((order) => new OrderResource().compile(order)));
    }
}
