const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'mysql',         // Nome do serviço no docker-compose.yml
  user: 'user',
  password: 'user_password',
  database: 'ecommerce_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
