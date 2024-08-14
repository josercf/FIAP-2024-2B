module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Estoque', {
      quantidade_disponivel: DataTypes.INTEGER
    });
  };
  