const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true },
    img: { type: [String], required: true },
    category: { type: String, required: true },
    userorderstatus: { type: String, default: 'Confirm', enum: ['Confirm', 'Cancel'] },
    orderStatus: { type: String, default: 'Pending', enum: ['Pending', 'Packing', 'Shipping','Delivered'] }
});

const orderConfirmSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    items: [cartSchema],
    username: { type: String, required: true },
    phone: { type: Number, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pincode: { type: String, required: true },
    address: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Ordeconfirm = new mongoose.model('Orderconfirm',orderConfirmSchema);


module.exports = Ordeconfirm;