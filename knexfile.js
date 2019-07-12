require('dotenv').config();
const knexConfig = require('./config/index').database;
module.exports = {
    development :knexConfig.connections.db,
    migrations: {
        directory: __dirname +'/migrations/',
        tableName: 'migrations'
    }
};