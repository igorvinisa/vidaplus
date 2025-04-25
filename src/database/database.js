const mysql = require('mysql2');

const database = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'admin',
    database: 'vidaplusdb'
});

module.exports = database;