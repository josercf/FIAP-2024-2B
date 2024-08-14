const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Cliente = require('./cliente')(sequelize, Sequelize.DataTypes);
const Estoque = require('./estoque')(sequelize, Sequelize.DataTypes);
const Pedido = require('./pedido')(sequelize, Sequelize.DataTypes);
const ItemPedido = require('./itemPedido')(sequelize, Sequelize.DataTypes);
const Pagamento = require('./pagamento')(sequelize, Sequelize.DataTypes);

Pedido.belongsTo(Cliente);
ItemPedido.belongsTo(Pedido);
ItemPedido.belongsTo(Estoque);
Pagamento.belongsTo(Pedido);

sequelize.sync();

module.exports = {
  Cliente,
  Estoque,
  Pedido,
  ItemPedido,
  Pagamento
};
