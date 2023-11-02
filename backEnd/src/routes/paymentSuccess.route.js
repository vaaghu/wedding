const express = require("express");
const router = express.Router();
// const Auth = require("../../utils/auth")
const paymentSuccess = require("../controller/paymentSuccess.controller");
const captureRawBody = require("../utils/captureRawBody")
router.route('/paymentSuccess').post(captureRawBody,paymentSuccess);

module.exports = router;