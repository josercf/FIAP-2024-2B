const sequelize = require('../config/database');

const Cliente = require('./cliente');
const Estoque = require('./estoque');
const Pedido = require('./pedido');
const ItemPedido = require('./itemPedido');
const Pagamento = require('./pagamento');


module.exports = {
  Cliente,
  Estoque,
  Pedido,
  ItemPedido,
  Pagamento
};
