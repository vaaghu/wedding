const express = require("express");
const router = express.Router();
// const Auth = require("../../utils/auth")
const {progressAll, progressOne} = require("../controller/progress.controller");

router.route('/progressAll').get(progressAll);
router.route('/progressOne/:id').get(progressOne);
module.exports = router;