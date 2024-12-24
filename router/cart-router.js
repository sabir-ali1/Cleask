const express = require("express");
const router = express.Router();
const cartController = require("../controller/cart-controller");
const authMiddelware = require("../middelware/authMiddelware");

//add to cart
router.route("/add").post(authMiddelware,cartController.addToCart);

//get user cart items
router.route("/get").get(authMiddelware,cartController.getToCart);

//decrease qty
router.route("/-qty").post(authMiddelware,cartController.decreaseQty);

//delete product
router.route("/delete").delete(authMiddelware,cartController.deleteSingleProduct);

//remove all product
router.route("/remove").delete(authMiddelware,cartController.removeAllProduct);



module.exports = router
