const express = require("express");
const router = express.Router();
const holdOrderController = require("../admin-controller/holdorder");
const authMiddelware = require("../middelware/authMiddelware");
const adminMiddleware = require("../middelware/adminMiddelware");


//hold order router
router.route("/hold-order/get").get(authMiddelware,adminMiddleware,holdOrderController.holdOrder);


module.exports = router