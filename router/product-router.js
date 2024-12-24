const express = require("express");
const router =  express.Router();
const productController = require("../controller/product-controller");


//get all product
router.route("/get").get(productController.getAllProduct);

//get single product
router.route("/get/:id").get(productController.getSingleProduct)


module.exports = router