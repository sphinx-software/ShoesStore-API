export default class Product {
    constructor(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    getName() {
        return 'Fake product';
    }
}
