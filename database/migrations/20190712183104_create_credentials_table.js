
exports.up = function(knex) {
    console.log('4');
    return  knex.schema.hasTable('credentials').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('credentials', function (table) {
                table.increments('id');
                table.string('username');
                table.string('password');
                table.string('external_login');
                table.string('type');
                table.timestamp('created_at').defaultTo(knex.fn.now());
                table.timestamp('updated_at'); 
                table.boolean('delete_at');
            });
        }
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('credentials');

};
