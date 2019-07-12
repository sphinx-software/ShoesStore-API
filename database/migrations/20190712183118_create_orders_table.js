
exports.up = function(knex) {
    console.log('6');
    return  knex.schema.hasTable('orders').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('orders', function (table) {
                table.increments('id');
                table.integer('profile_id');
                table.date('order_date');
                table.string('payment_method');
                table.string('order_notes');
                table.string('status');
                table.date('shipped_date');
                table.string('customer_name');
                table.text('address');
                table.string('phone');
                table.timestamp('created_at').defaultTo(knex.fn.now());
                table.timestamp('updated_at'); 
                table.boolean('delete_at');
            })
        }
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('orders');

};
