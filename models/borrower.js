'use strict';
module.exports = (sequelize, DataTypes) => {
  const Borrower = sequelize.define('Borrower', {
    borrower_id: DataTypes.INTEGER,
    borrower_name: DataTypes.STRING
  }, {});
  Borrower.associate = function(models) {
    // associations can be defined here
  };
  return Borrower;
};