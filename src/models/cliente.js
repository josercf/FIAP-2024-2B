module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Cliente', {
    cliente_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    tableName: 'Cliente', // Nome da tabela existente no banco de dados
    freezeTableName: true  ,
    timestamps: false  // Desativar createdAt e updatedAt
  });
};
