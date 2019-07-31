import {hal, HalTemplate} from "@fusion.io/framework";

@hal(bill => "/api/v1/bills/" + bill.id)
export default class BillResource extends HalTemplate {
    render(bill) {
        this.state('data', bill.toJSON())
        ;

    }
}
