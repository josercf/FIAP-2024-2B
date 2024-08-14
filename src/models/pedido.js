module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Pedido', {
    pedido_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cliente_id: DataTypes.INTEGER,
    data_pedido: DataTypes.DATE,
    status_pedido: DataTypes.STRING
  }, {
    tableName: 'Pedido',
    freezeTableName: true,
    timestamps: false  // Desativar createdAt e updatedAt
  });
};
