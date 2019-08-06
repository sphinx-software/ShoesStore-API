import Collection from "./Collection";
import moment     from "moment";

export default class Factory {
    static factory (raw) {
        const collection        = new Collection(null, raw.parentId, raw.name, raw.slug);
        collection.relatedSlugs = raw.relatedSlugs;
        collection.createdAt    = moment().toDate();

        return collection.toJSON();
    }

    static update (raw) {
        const collection        = new Collection(null, raw.parentId, raw.name, raw.slug);
        collection.relatedSlugs = raw.relatedSlugs;
        collection.updatedAt    = moment().toDate();
        return collection.toJSON();
    }

    static build (raw) {
        if (!raw) {
            return null;
        }

        const collection        = new Collection(raw.id, raw.parentId, raw.name, raw.slug);
        collection.relatedSlugs = raw.relatedSlugs;
        collection.createdAt    = raw.createdAt;
        collection.updatedAt    = raw.updatedAt;
        collection.deletedAt    = raw.deletedAt;

        return collection.toJSON();
    }

    static builds (raws) {
        if (!raws || !Array.isArray(raws) || raws.length < 1) {
            return [];
        }
        raws.forEach((raw, key, collections) => {
            collections[key] = this.build(raw);
        });
        return raws
    }
}
