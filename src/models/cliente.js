module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Cliente', {
      nome: DataTypes.STRING,
      email: DataTypes.STRING
    });
  };
  