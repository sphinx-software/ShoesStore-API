import Bill        from "../../ShoesStore/Bill/Bill";
import {inject}     from "@fusion.io/framework";
import faker        from "faker";

export default class OrderSeeder {

    @inject()
    async seed() {
        await Bill.query().truncate();
        for (let i = 0; i <20 ; i++) {
            await Bill.query().insert({
                profile_id: 1,
                order_date: faker.date.past(),
                payment_method: "COD",
                order_notes: "",
                status: "Dang Giao Hang",
                shipped_date: faker.date.past(),
                customer_name: faker.name.findName(),
                address: faker.address.streetAddress(),
                phone: faker.phone.phoneNumber(),
            });
        }
    }
}
