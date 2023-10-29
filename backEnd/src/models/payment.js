const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Payment extends Model {}

  Payment.init({
    entityId: DataTypes.STRING,
    orderId: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    baseAmount: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Payment',
  });

  return Payment;
};