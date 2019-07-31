export default class AlterTableOrderProductsMigration {

    async up(schema) {
        await schema.alterTable('order_products', table => {
            table.timestamps();
            table.timestamp('deleted_at');
        });
    }

    async down(schema) {
        await schema.alterTable('order_products', table => {
            table.dropTimestamps();
            table.dropColumn('deleted_at');
        });
    }
}
