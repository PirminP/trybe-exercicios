const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '45!LePsam_D',
  database: 'model_example'});

module.exports = connection;