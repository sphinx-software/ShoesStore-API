export default class CreateTableProfilesMigration {

    async up(schema) {
        await schema.createTable('profiles', table => {
            table.increments();
            table.string('name');
            table.string('email');
            table.string('phone');
            table.string('gender');
            table.string('avatar');
            table.integer('credential_id');
            table.specificType('address', 'text ARRAY');
            table.timestamp('created_at');
            table.timestamp('updated_at');
            table.boolean('delete_at');
        });
    }

    async down(schema) {
        await schema.dropTable('profiles');
    }
}
