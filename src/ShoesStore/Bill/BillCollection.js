import {hal, HalTemplate} from "@fusion.io/framework";
import BillResource      from "./BillResource";


@hal(() => "/api/v1/bills")
export default class BillCollection extends HalTemplate {
    render(orders) {
        this.state("data", orders.map((order) => new BillResource().compile(order)));
    }
}
