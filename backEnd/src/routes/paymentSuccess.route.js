const express = require("express");
const router = express.Router();
// const Auth = require("../../utils/auth")
const paymentSuccess = require("../controller/paymentSuccess.controller");

router.route('/paymentSuccess').post(paymentSuccess);

module.exports = router;