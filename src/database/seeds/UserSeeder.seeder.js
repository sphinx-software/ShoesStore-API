import Profile from "../../ShoesStore/User/Profile";
import faker from "faker";

export default class UserSeeder {

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
                avatar: faker.image.avatar()
            });
        }
    }
}
