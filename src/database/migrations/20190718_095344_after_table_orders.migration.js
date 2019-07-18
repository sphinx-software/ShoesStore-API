export default class AfterTableOrdersMigration {

    async up(schema) {
        await schema.alterTable('orders', table => {
            table.dropColumn('order_date');
            table.dropColumn('shipped_date');
        });
    }

    async down(schema) {
        await schema.alterTable('orders', table => {
            table.date('order_date');
            table.date('shipped_date');
        });
    }
}
