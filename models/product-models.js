const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    img: { type: [String], required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    benefits: { type: String, required: true },
    description1: { type: String, required: true },
    description2: { type: String },
    category: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
