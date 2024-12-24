const Ordeconfirm = require("../models/orderconfirm");

//get all confirm order
const getAllConfirmOrder = async (req, res) => {
    try {
        const order = await Ordeconfirm.find().populate("userId", 'username email phone').sort({ createdAt: -1 });

        if (!order) {
            return res.status(400).json({ message: "confirm order is not avaialable" })
        }

        return res.status(200).json(order);

    } catch (error) {
        console.log("error from getAllConfirmOrder", error);
    }
}


//update order status
const updateOrderStatus = async (req, res) => {
    try {
        const id = req.params.id;
        const { productId, orderStatus } = req.body;

        const update = await Ordeconfirm.updateOne({ _id: id, "items.productId": productId }, { $set: { "items.$.orderStatus": orderStatus } })

        return res.status(200).json({ message: "Updated Status" })

    } catch (error) {
        console.log("error from updateOrderStatus", error);
    }
}

module.exports = { getAllConfirmOrder, updateOrderStatus }