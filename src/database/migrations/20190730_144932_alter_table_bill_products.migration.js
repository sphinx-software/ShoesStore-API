export default class AlterTableBillProductsMigration {

    async up(schema) {
        await schema.alterTable('bill_products', table => {
            table.renameColumn('order_id','bill_id');
        });
    }

    async down(schema) {
        await schema.alterTable('order_products', table => {
            table.renameColumn('bill_id', 'order_id');
        });
    }
}
