import Profile from "../../ShoesStore/Profile/Profile";
import faker from "faker";
import {inject} from "@fusion.io/framework";
import Credential from "../../Http/Auth/Credential";


export default class UserSeeder {
    @inject()
    async seed() {
        for (let index = 0; index < 30; index++) {
            await Profile.query().insert({
                name: faker.name.findName(),
                phone: faker.phone.phoneNumber(),
                dob:faker.date.past(),
                credential_id:faker.random.number(),
                gender: faker.random.boolean().toString(),
                address: [
                    faker.address.streetAddress(),
                    faker.address.streetAddress()
                ],
                avatar: faker.image.avatar(),
            });
        }
    }
}
