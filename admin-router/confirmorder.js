const express = require("express");
const router = express.Router();
const confirOrderController = require("../admin-controller/ordeconfirm");
const authMiddelware = require("../middelware/authMiddelware");
const adminMiddleware = require("../middelware/adminMiddelware");

//get confirm order
router.route("/confirm-order/get").get(authMiddelware,adminMiddleware,confirOrderController.getAllConfirmOrder);

//update order status
router.route("/confirm-order/status/:id").patch(authMiddelware,adminMiddleware,confirOrderController.updateOrderStatus)

module.exports = router;