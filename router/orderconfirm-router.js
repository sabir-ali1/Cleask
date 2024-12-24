const express = require("express");
const router = express.Router();
const authMiddelware = require("../middelware/authMiddelware");
const orderController = require("../controller/orderconfirm-controller");

//add order
router.route("/add").post(authMiddelware,orderController.addOrderConfirm);

//cancel order
router.route("/cancel/:id").patch(authMiddelware,orderController.cancelOrderFromUser)

//get order
router.route("/get").get(authMiddelware,orderController.getOrder);


module.exports = router