const express = require("express");
const router = express.Router();
const adminProduct = require("../admin-controller/product");
const authMiddelware = require("../middelware/authMiddelware");
const adminMiddleware = require("../middelware/adminMiddelware");

//add product
router.route("/product/add").post(authMiddelware,adminMiddleware,adminProduct.addProduct);

//get all product router
router.route("/product/get").get(authMiddelware,adminMiddleware,adminProduct.getAllProduct);

//get single product
router.route("/product/get/:id").get(authMiddelware,adminMiddleware,adminProduct.getSingleProduct);

//update product router
router.route("/product/update/:id").patch(authMiddelware,adminMiddleware,adminProduct.updateProduct);

//delete product
router.route("/product/delete/:id").delete(authMiddelware,adminMiddleware,adminProduct.deleteProduct);


module.exports = router