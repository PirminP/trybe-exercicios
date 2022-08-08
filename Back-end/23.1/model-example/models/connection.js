const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    user: 'root',
    password: '45!LePsam_D',
    host: 'localhost',
    database: 'model_example'
});

module.exports = connection;