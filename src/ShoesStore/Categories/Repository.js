import {singleton} from '@fusion.io/framework';

@singleton()
export default class Repository {
    constructor() {
        this.obj = {
            categories: [
                {
                    id: 1,
                    name: "linh",
                }
            ]
        }
    }

    get() {
        return this.obj.categories;
    }

    getbyId(id) {
        let category = [];
        this.obj.categories.forEach((cate, index) => {
            if (cate.id == id) {
                category = this.obj.categories[index];
            }
        });
        return category;
    }

    create(id, name) {
        return this.obj.categories.push({
            id, name
        });
    }

    update(id, name) {
        return this.obj.categories.forEach((cate, index) => {
            if (cate.id == id) {
                this.obj.categories[index] = {
                    id: id,
                    name: name
                };
            }
        });
    }

    delete(id) {
        this.obj.categories.forEach((cate, index) => {
            if (cate.id == id) {
                this.obj.categories.splice(index, 1);
            }
        });
        return this.obj.categories;
    }
}
