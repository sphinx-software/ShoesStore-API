const database = require('./config/index').database.connections.readonlyDB;

module.exports = {

  development: {
    client: database.client,
    connection: database.connection,
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        directory: __dirname + '/database/migrations/',
        tableName: 'migrations'
    },
    seeds: {
        directory: __dirname + '/database/seeds'
    }
  }

};
