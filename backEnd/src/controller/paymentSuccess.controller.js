const { Sequelize } = require("sequelize");
const { Payment } = require('../models');

const paymentSuccess = async (req, res) => {
  try {
    let entity = req.body.payload.payment.entity;
    let obj = {
      entityId: entity.id,
      orderId: entity.order_id,
      amount: entity.amount,
      baseAmount: entity.base_amount
    };

    result = await Payment.create(obj);
    console.log(result)
    res.status(200).send('Data inserted successfully'); // Optional: Send a success message
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = paymentSuccess;