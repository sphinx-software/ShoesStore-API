import Order from "../../ShoesStore/Orders/Order";
import {inject} from "@fusion.io/framework";
import faker from "faker";

export default class OrderSeeder {

    @inject()
    async seed() {
        await Order.query().truncate();
        await Order.query().insert({
            profile_id: 1,
            order_date: faker.date.past(),
            payment_method: "COD",
            order_notes: "test",
            status: "Dang Giao Hang",
            shipped_date: faker.date.past(),
            customer_name: faker.name.findName(),
            address: faker.address.streetAddress(),
            phone: faker.phone.phoneNumber(),
        });
    }
}
