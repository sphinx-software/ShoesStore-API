export default class ChangeNameTableOrderMigration {

    async up(schema) {
        await schema.renameTable('orders', 'bills');

    }

    async down(schema) {
        await schema.renameTable('bills','orders');
    }
}
