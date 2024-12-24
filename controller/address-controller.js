const Address = require("../models/Address");

//add address
const addAddress = async (req,res) => {
    try {
        const {username,phone,city,state,country,pincode,address} = req.body;

        const userId = req.user;

        const createAddress = await Address.create({userId,username,phone,city,state,country,pincode,address});

        return res.status(200).json({message:"Address Add Successfull",createAddress})

    } catch (error) {
        console.log("error from add address",error);
    }
}

//get address
const getAddress = async (req,res) => {
    try {
        const userId = req.user;
        const address = await Address.findOne({userId}).sort({createdAt:-1});

        if(!address){
            return res.status(400).json({message:"Address not available"});
        }

        return res.status(200).json(address);

    } catch (error) {
        console.log("error from get address",error);
    }
}


module.exports = {addAddress,getAddress}