export default class CreateTableCollectionsMigration {

    async up(schema) {
        await schema.createTable('collections', table => {
            table.increments();
            table.integer('parent_id');
            table.string('name');
            table.string('slug');
            table.specificType('related_slugs', 'text ARRAY');
        });
    }

    async down(schema) {
        await schema.dropTable('collections');
    }
}
