const { Sequelize } = require("sequelize");
const { Payment } = require('../models');
require('dotenv').config(); // Load environment variables from .env
const webHookSecret = process.env.webHookSecret;
const { validateWebhookSignature } = require('razorpay/dist/utils/razorpay-utils');


const paymentSuccess = async (req, res) => {
  try {    
    const webhookSignature = req.headers['x-razorpay-signature']; // Assuming the signature is in the request headers
    const webhookSecret = process.env.webHookSecret; // Assuming you've set the webhook secret in your .env file
    const isValidSignature = validateWebhookSignature(req.body, webhookSignature, webhookSecret);
    
    if (!isValidSignature) {
      console.error('Invalid webhook signature');
      res.status(403).send('Forbidden');
      return;
    }

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