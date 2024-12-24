const Product = require("../models/product-models");


//add product
const addProduct = async (req, res) => {
    try {
        const { img, title, price, benefits, description1, description2, category } = req.body;

        const createProduct = await Product.create({ img, title, price, benefits, description1, description2, category });

        return res.status(200).json({message:"Product Add Successfull"});

    } catch (error) {

    }
}

//get all product for admin
const getAllProduct = async (req,res) => {
    try {
        const product = await Product.find();
        if(!product){
            return res.status(400).json({message:"Product is not Availabel"})
        }

        return res.status(200).json(product)


    } catch (error) {
        console.log("error from get all product for admin",error);
    }
}

//get single product
const getSingleProduct = async (req,res) => {
    try {
        const id = req.params.id;

      const product = await Product.findOne({_id:id});

      return res.status(200).json(product);

    } catch (error) {
        
    }
}

//update product details
const updateProduct = async (req,res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;

        const data = await Product.updateOne({_id:id},{$set:updateData});

        return res.status(200).json({message:"Product Updated Successfull"});

    } catch (error) {
        console.log("error from update product",error);
    }
}

//delete product 
const deleteProduct = async (req,res) => {
    try {
        const id = req.params.id;

        await Product.deleteOne({_id:id});

        return res.status(200).json({message:"Product Detleted"});

    } catch (error) {
        console.log("error from delete product",error);
    }
}


module.exports = {addProduct,getAllProduct,getSingleProduct,updateProduct,deleteProduct}