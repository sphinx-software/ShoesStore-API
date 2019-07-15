export default class CreateTableOrdersMigration {

    async up(schema) {
        await schema.createTable('orders', table => {
            table.increments();
            table.integer('profile_id');
            table.date('order_date');
            table.string('payment_method');
            table.string('order_notes');
            table.string('status');
            table.date('shipped_date');
            table.string('customer_name');
            table.text('address');
            table.string('phone');
            table.timestamp('created_at');
            table.timestamp('updated_at');
            table.boolean('delete_at');
        });
    }

    async down(schema) {
        await schema.dropTable('orders');
    }
}
