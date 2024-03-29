import Profile  from "../../ShoesStore/Profile/Profile";
import faker    from "faker";
import {inject} from "@fusion.io/framework";


export default class UserSeeder {
    @inject()
    async seed() {
        await Profile.query().truncate();

        for (let index = 0; index < 30; index++) {
            await Profile.query().insert({
                name: faker.name.findName(),
                phone: faker.phone.phoneNumber(),
                dob:faker.date.past(),
                credential_id: index + 1,
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
