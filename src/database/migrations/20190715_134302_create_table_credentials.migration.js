export default class CreateTableCredentialsMigration {

    async up(schema) {
        await schema.createTable('credentials', table => {
            table.increments();
            table.string('username');
            table.string('password');
            table.string('external_login');
            table.string('type');
            table.timestamp('created_at');
            table.timestamp('updated_at');
            table.boolean('delete_at');
        });
    }

    async down(schema) {
        await schema.dropTable('credentials');
    }
}
