export default class CreateTableCredentialsMigration {

    async up(schema) {
        await schema.createTable('credentials', table => {
            table.increments();
            table.string('username');
            table.string('password');
            table.string('external_login');
            table.string('type');
            table.timestamps();
            table.timestamp('deleted_at');
        });
    }

    async down(schema) {
        await schema.dropTable('credentials');
    }
}
