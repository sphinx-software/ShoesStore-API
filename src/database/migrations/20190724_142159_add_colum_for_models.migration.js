export default class AddColumForModelsMigration {

    async up(schema) {
        await schema.alterTable('models', table => {
            table.integer("discount");
        });
    }

    async down(schema) {
        await schema.alterTable('models', table => {
            table.dropColumn("discount");
        });
    }
}
