import Profile from "../../ShoesStore/Profile/Profile";
import faker from "faker";
import {inject} from "@fusion.io/framework";


export default class UserSeeder {
    @inject()
    async seed() {
        for (let index = 0; index < 30; index++) {
            await Profile.query().insert({
                name: faker.name.findName(),
                phone: faker.phone.phoneNumber(),
                email: faker.internet.email(),
                gender: faker.random.boolean().toString(),
                address: [
                    faker.address.streetAddress(),
                    faker.address.streetAddress()
                ],
                avatar: faker.image.avatar(),
                created_at:new Date(),
                updated_at:new Date(),
                delete_at:faker.random.boolean().toString()
            });
        }
    }
}
