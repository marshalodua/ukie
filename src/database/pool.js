const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env['db_host'],
    user: process.env['db_user'],
    database: process.env['db_name'],
    password: process.env['db_password'],
    waitForConnections: true,
    connectionLimit: 50,
    queueLimit: 5
})

module.exports = pool;