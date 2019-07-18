export default class AfterTableOrdersAddColumnMigration {

    async up(schema) {
        await schema.alterTable('orders', table => {
            table.timestamp('order_date').alter();
            table.timestamp('shipped_date');
        });
    }

    async down(schema) {
        await schema.alterTable('orders', table => {
            table.dropColumn('order_date');
            table.dropColumn('shipped_date');
        });
    }
}
