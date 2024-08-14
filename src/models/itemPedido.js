module.exports = (sequelize, DataTypes) => {
    return sequelize.define('ItemPedido', {
      quantidade: DataTypes.INTEGER,
      preco_unitario: DataTypes.FLOAT
    });
  };
  