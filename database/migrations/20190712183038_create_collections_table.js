
exports.up = function(knex) {
    console.log('1');
    return  knex.schema.hasTable('collections').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('collections', function (table) {
                table.increments('id');
                table.integer('parent_id');
                table.string('name');
                table.string('slug');
                table.specificType('related_slugs', 'text ARRAY');
            });
        }
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('collections');

};
