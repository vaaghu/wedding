const Sequelize = require('sequelize');
const config = require('../config/config.json'); // Adjust the path as needed

const { username, password, database, host, dialect } = config.development; // Use the appropriate environment

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
});

const Payment = require('./payment')(sequelize); // Assuming your model file is named 'payment.js'

// Define associations if needed
console.log(Payment)
module.exports = {
  Payment,
};