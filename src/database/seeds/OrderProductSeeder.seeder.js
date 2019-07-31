import {inject}     from "@fusion.io/framework";
import BillProduct from "../../ShoesStore/BillProduct/BillProduct";

export default class OrderProductSeeder {

    @inject()
    async seed() {
        await BillProduct.query().truncate();
        const orderProduct = [{
                bill_id: 1,
                product_id: 1,
                quantity: 500,
                price: 1000,
                name: "Giay Bet",
                size: "36",
                color: "do"
            },
            {
                bill_id: 2,
                product_id: 2,
                quantity: 600,
                price: 1000,
                name: "Giay Cao Got",
                size: "37",
                color: "xanh"
            },
            {
                bill_id: 3,
                product_id: 3,
                quantity: 700,
                price: 1000,
                name: "Giay Da",
                size: "38",
                color: "vang"
            },{
                bill_id: 1,
                product_id: 2,
                quantity: 500,
                price: 1000,
                name: "Giay Khong Bet",
                size: "36",
                color: "do"
            }];
        await BillProduct.query().insert(orderProduct);
    }
}
