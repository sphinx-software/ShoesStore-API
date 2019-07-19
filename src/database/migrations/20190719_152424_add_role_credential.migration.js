export default class AddRoleCredentialMigration {

    async up(schema) {
        await schema.alterTable('credentials', table => {
            table.string('role');
        });
    }
    async down(schema) {
        await schema.alterTable('credentials', table => {
            table.dropColumn('role');
        });
    }
}
