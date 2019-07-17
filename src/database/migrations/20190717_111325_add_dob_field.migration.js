export default class AddDobFieldMigration {

    async up(schema) {
        await schema.alterTable('profiles', table => {
            table.dateTime('dob');
        });
    }

    async down(schema) {
        await schema.alterTable('profiles', table => {
            table.dropColumn('dob');
        });
    }
}
