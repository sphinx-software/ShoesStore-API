
exports.up = function(knex) {
    console.log('2');
    return  knex.schema.hasTable('models').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('models', function (table) {
                table.increments('id');
                table.string('name');
                table.integer('collection_id');
                table.integer('price');
                table.text('description');
                table.specificType('sizes', 'text ARRAY');
                table.specificType('colors', 'text ARRAY');
                table.specificType('images', 'text ARRAY');
                table.specificType('tags', 'text ARRAY');
                table.boolean('status');
                table.timestamp('created_at').defaultTo(knex.fn.now());
                table.timestamp('updated_at'); 
                table.boolean('delete_at');
                table.string('slug');
            })
        }
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('models');
};
