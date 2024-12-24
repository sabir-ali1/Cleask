const Ordeconfirm = require("../models/orderconfirm");


//add order
const addOrderConfirm = async (req, res) => {
    try {
        const { items, username, phone, city, state, country, pincode, address } = req.body;
        const userId = req.user;

        if (!userId) {
            return res.status(401).json({ error: "Please login to add order" })
        }

        const order = await Ordeconfirm.create({ userId, items, username, phone, city, state, country, pincode, address });

        return res.status(200).json({ message: "Order Confirm Successfull", order });

    } catch (error) {
        console.log("error from add to cart", error);
    }
}

//cancel order from user
const cancelOrderFromUser = async (req, res) => {
    try {
        const id = req.params.id;
        const { productId, userorderstatus } = req.body;
        const update = await Ordeconfirm.updateOne({ _id: id, "items.productId": productId }, { $set: { "items.$.userorderstatus": userorderstatus } });

        return res.status(200).json({ message: "Cancel Order",update })

    } catch (error) {
        console.log("error from cancel order from user", error);
    }
}

//get order status
const getOrder = async (req, res) => {
    try {

        const userId = req.user;
        if (!userId) {
            return res.status(400).json({ message: "Order is not Available" })
        }
        const order = await Ordeconfirm.find({ userId }).sort({ createdAt: -1 });

        return res.status(200).json(order);

    } catch (error) {
        console.log("error from get order status", error);
    }
}



module.exports = { addOrderConfirm, cancelOrderFromUser, getOrder };