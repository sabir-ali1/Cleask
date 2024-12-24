const Cart = require("../models/cart-models");

//hold order
const holdOrder = async (req,res) => {
    try {
        const product = await Cart.find().populate("userId",'username email phone');
     
        if(!product){
            return res.status(400).json({message:"Hold Product is Not Available"});
        }

        return res.status(200).json(product);

    } catch (error) {
        console.log("error from hold order",error);
    }
}


module.exports = {holdOrder}