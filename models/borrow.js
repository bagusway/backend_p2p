'use strict';
module.exports = (sequelize, DataTypes) => {
  const Borrow = sequelize.define('Borrow', {
    borrow_id: DataTypes.INTEGER,
    borrower_id: DataTypes.STRING,
    nominal_borrower: DataTypes.INTEGER,
    lender_id: DataTypes.INTEGER,
    nominal_fix: DataTypes.INTEGER,
    nego: DataTypes.INTEGER,
    status_id: DataTypes.INTEGER
  }, {});
  Borrow.associate = function(models) {
    // associations can be defined here
  };
  return Borrow;
};