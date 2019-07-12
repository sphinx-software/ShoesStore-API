exports.up = function (knex) {
    console.log('5');
    return knex.schema.hasTable('profiles').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('profiles', function (table) {
                table.increments('id');
                table.string('name');
                table.string('email');
                table.string('phone');
                table.string('gender');
                table.string('avartar');
                table.integer('credential_id');
                table.specificType('address', 'text ARRAY');
                table.timestamp('created_at').defaultTo(knex.fn.now());
                table.timestamp('updated_at'); 
                table.boolean('delete_at');
            })
        }
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('profiles');

};
