const Product = require("../models/product-models");


//get all product
const getAllProduct = async (req, res) => {
    try {
        const product = await Product.find();
        if (!product.length === 0) {
            return res.status(400).json({ message: "Products not available" })
        }

        return res.status(200).json(product)

    } catch (error) {
        console.log("error from get all product", error);
    }
}

//get single product
const getSingleProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const singleProduct = await Product.findById(id);
        if(!singleProduct){
            return res.status(400).json({message:"product is not available"});
        }

        return res.status(200).json(singleProduct)
    } catch (error) {
        console.log("error from get single product",error);
    }
}


module.exports = { getAllProduct,getSingleProduct }