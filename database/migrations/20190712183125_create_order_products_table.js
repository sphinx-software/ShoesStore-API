
exports.up = function(knex) {
    return  knex.schema.hasTable('order_products').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('order_product', function (table) {
                table.increments('id');
                table.integer('order_id');
                table.integer('product_id');
                table.integer('quantity');
                table.integer('price');
                table.string('name');
                table.string('size');
                table.string('color');
                table.timestamp('created_at').defaultTo(knex.fn.now());
                table.timestamp('updated_at'); 
                table.boolean('delete_at');
            });
        }
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('order_products');
};
