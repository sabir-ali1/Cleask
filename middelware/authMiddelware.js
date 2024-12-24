const User = require("../models/user-models");
const jwt = require("jsonwebtoken");

const authMiddelware = async (req,res,next) => {
    try {
        const token = req.header('Authorization');

        if(!token){
            return res.status(400).json({message:"invalid token"})
        }

        const jwtToken = token.replace("Bearer ","").trim();
        const tokenVerify = jwt.verify(jwtToken,process.env.secret_key);

        const userData = await User.findOne({email:tokenVerify.email}).select({password:0});

        req.user = userData


        next();

    } catch (error) {
        console.log("error from authMiddelware",error);
    }
}

module.exports = authMiddelware