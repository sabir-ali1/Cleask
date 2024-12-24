require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./utils/db");
const userRouter = require("./router/user-router");
const productRouter = require("./router/product-router");
const cartRouter = require("./router/cart-router");
const addressRouter = require("./router/address-router");
const orderconfirmRouter = require("./router/orderconfirm-router");
const adminUserRouter = require("./admin-router/user-router");
const adminProductRouter = require("./admin-router/product-router");
const adminHoldRouter = require("./admin-router/holdorder");
const adminControllerRouter = require("./admin-router/confirmorder");

app.use(express.json());

const corsOption= {
    origin:"https://cleask.netlify.app",
    method:['GET','POST','UPDATE','PATCH','PUT','DELETE'],
    Credential: true
}
app.use(cors(corsOption));

//user router
app.use("/api/auth",userRouter);

//product router
app.use("/api/product",productRouter);

//cart router
app.use("/api/cart",cartRouter);

//address router
app.use("/api/address",addressRouter);

//orderconfirm router
app.use("/api/orderconfirm",orderconfirmRouter);


//---------------this api for admin user---------------//

//this api for user
app.use("/api/admin",adminUserRouter);

//this api for product
app.use("/api/admin",adminProductRouter);

//this api for hold order
app.use("/api/admin",adminHoldRouter);

//this api for confirm order
app.use("/api/admin",adminControllerRouter);

app.get("/",(req,res)=>{
    return res.status(200).json({message:"welcome to home page"})
});

const port = 5000

connectDb().then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on ${port}`);
    })
});
