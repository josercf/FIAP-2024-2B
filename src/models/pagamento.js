module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Pagamento', {
      valor: DataTypes.FLOAT,
      status_pagamento: DataTypes.STRING,
      data_pagamento: DataTypes.DATE
    });
  };
  