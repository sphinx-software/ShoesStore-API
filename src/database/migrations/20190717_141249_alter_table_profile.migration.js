export default class AlterTableProfileMigration {

    async up(schema) {
        await schema.alterTable('profiles', table => {
            table.dropColumn('email');
        });
    }

    async down(schema) {
        await schema.alterTable('profiles', table => {
            table.string('email');
        });
    }
}
