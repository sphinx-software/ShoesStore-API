export default class CreateTableOrderProductsMigration {

    async up(schema) {
        await schema.createTable('order_products', table => {
            table.increments();
            table.integer('order_id');
            table.integer('product_id');
            table.integer('quantity');
            table.integer('price');
            table.string('name');
            table.string('size');
            table.string('color');
            table.timestamp('created_at');
            table.timestamp('updated_at');
            table.boolean('delete_at');
        });
    }

    async down(schema) {
        await schema.dropTable('order_products');
    }
}
