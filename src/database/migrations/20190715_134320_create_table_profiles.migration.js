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
            table.timestamps();
            table.timestamp('deleted_at');
        });
    }

    async down(schema) {
        await schema.dropTable('profiles');
    }
}
