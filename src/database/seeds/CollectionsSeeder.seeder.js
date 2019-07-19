import {inject} from "@fusion.io/framework";
import faker from "faker";
import Collection from "../../ShoesStore/Collection/Collection";
import Order from "../../ShoesStore/Orders/Order";
var slug = require("slug")

export default class CollectionsSeeder {

    @inject()
    async seed() {
        await Collection.query().truncate();

        for (let index = 0; index < 5; index++) {
            let name = faker.name.jobTitle();
            let slugName = slug(name.toLowerCase());
            let related_slugs = slug(faker.name.jobTitle().toLowerCase());

            await Collection.query().insert({
                name: name,
                slug: slugName,
                related_slugs: [related_slugs]

            });
        }
        for (let index = 0; index < 5; index++) {
            let name = faker.name.jobTitle();
            let slugName = slug(name.toLowerCase());
            let related_slugs = slug(faker.name.jobTitle().toLowerCase());

            await Collection.query().insert({
                name: name,
                parent_id: index + 1,
                slug: slugName,
                related_slugs: [related_slugs]

            });
        }
    }
}
