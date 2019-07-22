export default class AddTokenFieldForApiAuthenticationMigration {

    async up(schema) {
        await schema.alterTable('credentials', table => {
            table.string('api_token');
        });
    }

    async down(schema) {
        await schema.alterTable('credentials', table => {
            table.dropColumn('api_token');
        });
    }
}
