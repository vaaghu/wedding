const { Payment } = require('../models'); // Adjust the path as needed
const sequelize = require('sequelize');
const cardsInfo = require("../utils/cardsInfo.json")

const progressAll = async (req, res) => {
  try {
    let entityIdsToCalculate = cardsInfo.map(item => item.payment_id);
    
    let payments = await Payment.findAll({
      attributes: [
        'entityId', 
        [sequelize.fn('SUM', sequelize.col('amount')), 'totalAmount']
      ],
      where: {
        entityId: entityIdsToCalculate
      },
      group: ['entityId']
    });

    let totalObj = {}
    cardsInfo.forEach((item)=>{totalObj[item.payment_id] = item.total})

    let ratios = payments.map(payment => {
      let totalValue = totalObj[payment.dataValues.entityId];
      let ratio = totalValue > 0 ? payment.dataValues.totalAmount / totalValue : 0;
      return {
        payment_id: payment.dataValues.entityId,
        ratio: ratio
      };
    });

    res.json(ratios);
  } catch (error) {
    console.error('Error getting sum by payment_id:', error);
    res.status(500).send('Internal Server Error');
  }
  finally{
    res.end()
  }
};

const progressOne = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    // console.log(req.params,id)
    
    // Find the corresponding payment_id from jsonData
    const obj = cardsInfo.find(item => item.id === id)
    // console.log(obj)
    if (!obj) {
      return res.status(404).json({ error: 'Entity not found' });
    }

    let payments = await Payment.findOne({
      attributes: [
        'entityId', 
        [sequelize.fn('SUM', sequelize.col('amount')), 'totalAmount']
      ],
      where: {
        entityId: obj.payment_id
      },
      group: ['entityId']
    });

    payments.dataValues.ratio = payments.dataValues.totalAmount / obj.total
    delete payments.dataValues.totalAmount

    res.json(payments);
  } catch (error) {
    console.error('Error getting sum by payment_id:', error);
    res.status(500).send('Internal Server Error');
  }finally{
    res.end()
  }
};

module.exports = {progressAll,progressOne};