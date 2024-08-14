module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Pedido', {
      data_pedido: DataTypes.DATE,
      status_pedido: DataTypes.STRING
    });
  };
  