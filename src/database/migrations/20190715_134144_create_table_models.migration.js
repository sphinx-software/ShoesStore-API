export default class CreateTableModelsMigration {

    async up(schema) {
        await schema.createTable('models', table => {
            table.increments();
            table.string('name');
            table.integer('collection_id');
            table.integer('price');
            table.text('description');
            table.specificType('sizes', 'text ARRAY');
            table.specificType('colors', 'text ARRAY');
        });
    }

    async down(schema) {
        await schema.dropTable('models');
    }
}
