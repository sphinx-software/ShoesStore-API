export default class AddColumModelsMigration {

    async up(schema) {
        await schema.alterTable('models', table => {
            table.specificType('images','text ARRAY');
            table.string("status");
            table.specificType("tags", "text ARRAY");
            table.string("slug");
            table.timestamps();
            table.timestamp('deleted_at');
        });
    }

    async down(schema) {
        await schema.alterTable('models', table => {
            table.dropColumn("status");
            table.dropColumn("tags");
            table.dropColumn("slug");
            table.dropColumn('images');
            table.dropTimestamps();
            table.dropColumn('deleted_at');
        });
    }
}
