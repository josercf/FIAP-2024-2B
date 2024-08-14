module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Pagamento', {
    pagamento_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    pedido_id: DataTypes.INTEGER,
    valor: DataTypes.FLOAT,
    status_pagamento: DataTypes.STRING,
    data_pagamento: DataTypes.DATE
  }, {
    tableName: 'Pagamento',
    freezeTableName: true,
    timestamps: false  // Desativar createdAt e updatedAt
  });
};
