module.exports = (sequelize, DataTypes) => {
  return sequelize.define('ItemPedido', {
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    pedido_id: DataTypes.INTEGER,
    produto_id: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    preco_unitario: DataTypes.FLOAT
  }, {
    tableName: 'ItemPedido',
    freezeTableName: true,
    timestamps: false  // Desativar createdAt e updatedAt
  });
};
