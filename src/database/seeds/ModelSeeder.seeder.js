import {inject} from "@fusion.io/framework";
import faker    from "faker";
import Model    from "../../ShoesStore/Model/Model";

export default class ModelSeeder {

    @inject()
    async seed() {
        await Model.query().truncate();
        for (let i = 0; i <5 ; i++) {
            await Model.query().insert({
                collection_id:1,
                name:faker.name.findName(),
                price:faker.random.number(),
                description:"required",
                sizes:["S",'M','L'],
                colors:[faker.commerce.color(),faker.commerce.color(),faker.commerce.color()],
                images:[faker.image.imageUrl()],
            });
        }
    }
}
