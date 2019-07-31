export default class ChangeNameTableOrderProductsMigration {

    async up(schema) {
        await schema.renameTable('order_products', 'bill_products');
    }

    async down(schema) {
        await schema.renameTable('bill_products','order_products');
    }
}
