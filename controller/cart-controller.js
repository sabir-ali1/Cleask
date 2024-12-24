const Cart = require("../models/cart-models");


//add to cart
const addToCart = async (req, res) => {
    try {
        const { productId, img, title, price, qty, category } = req.body;

        const userId = req.user;

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = await Cart.create({ userId, items: [] });
        }

        const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productId);

        if (itemIndex >= 0) {
            cart.items[itemIndex].qty += qty;
            cart.items[itemIndex].price += price * qty
        } else {
            cart.items.push({ productId, img, title, price, qty, category })
        }

        await cart.save();

        return res.status(200).json({ message: "Item Add to Successfull", cart })

    } catch (error) {
        console.log("error from add to cart", error);
    }
}

//get to cart
const getToCart = async (req, res) => {
    try {
        const userId = req.user;

        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(400).json({ message: "cart not found" })
        }

        return res.status(200).json(cart);

    } catch (error) {

    }
}

//decrease qty
const decreaseQty = async (req, res) => {
    try {
        const { productId, qty } = req.body;

        const userId = req.user;

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(400).json({ message: "cart not found" })
        }

        const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productId);

        if (itemIndex > -1) {
            const item = cart.items[itemIndex];
            if (item.qty > qty) {
                const pricePerUnit = item.price / item.qty;
                item.qty -= qty;
                item.price -= pricePerUnit * qty;
            } else {
                cart.items.splice(itemIndex, 1);
            }
        } else {
            return res.status(404).json({ message: "Item Not Found in Cart" });
        }

        await cart.save();

        return res.status(200).json({ message: "Decrease qty", cart })

    } catch (error) {
        console.log("error from decrease qty", error);
    }
}

//delete single Product
const deleteSingleProduct = async (req, res) => {
    try {
        const { productId } = req.body

        const userId = req.user;

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(400).json({ message: "cart not found" });
        }

        cart.items = cart.items.filter((item) => item.productId.toString() !== productId);

        await cart.save();

        return res.status(200).json({ message: "Product Delete" });

    } catch (error) {
        console.log("error from delete single product", error);
    }
}


//delete all product
const removeAllProduct = async (req, res) => {
    try {
        const userId = req.user;

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(400).json({ message: "cart not found" })
        } else {
            cart.items = []
        }

        await cart.save();

        return res.status(200).json({ message: "all product delete" })



    } catch (error) {
        console.log("error from remove all product", error);
    }
}



module.exports = { addToCart, getToCart, decreaseQty, deleteSingleProduct, removeAllProduct }