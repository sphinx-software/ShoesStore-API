
exports.up = function(knex) {
    console.log('3');
    return  knex.schema.hasTable('products').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('products', function (table) {
                table.increments('id');
                table.string('size');
                table.string('color');
                table.integer('model_id');
                table.integer('quantity');
                table.integer('unit_price');
                table.timestamp('created_at').defaultTo(knex.fn.now());
                table.timestamp('updated_at'); 
                table.boolean('delete_at');
            })
        }
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('products');

};
