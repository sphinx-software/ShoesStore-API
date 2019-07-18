import {hal, HalTemplate} from "@fusion.io/framework";
import OrderResource from "./OrderResource";

@hal(() => "/api/v1/orders")
export default class OrderCollection extends HalTemplate {
    render(order) {
        this.state("data", order.map((order) => new OrderResource().compile(order)));
    }
}