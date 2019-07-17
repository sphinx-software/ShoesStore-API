export default class AddEmailCredentialMigration {

    async up(schema) {
        await schema.alterTable('credentials', table => {
            table.string('email');
        });
    }

    async down(schema) {
        await schema.alterTable('credentials', table => {
            table.dropColumn('email');
        });
    }
}
