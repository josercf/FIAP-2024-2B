const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommerce_db', 'user', 'user_password', {
  host: 'mysql',
  dialect: 'mysql'
});

module.exports = sequelize;
