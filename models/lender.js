'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lender = sequelize.define('Lender', {
    lender_id: DataTypes.INTEGER,
    lender_name: DataTypes.STRING
  }, {});
  Lender.associate = function(models) {
    // associations can be defined here
  };
  return Lender;
};