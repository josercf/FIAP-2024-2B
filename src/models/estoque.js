module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Estoque', {
    produto_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    quantidade_disponivel: DataTypes.INTEGER
  }, {
    tableName: 'Estoque',
    freezeTableName: true,
    timestamps: false  // Desativar createdAt e updatedAt
  });
};
