const User = require("../models/user-models");
const bcrypt = require("bcrypt");


//register user lgoic
const register = async (req,res) => {
    try {
        const {username,email,phone,password} = req.body;

        //check user exist or not
        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({message:"email already exist"})
        }

        //hahsPassword
        const saltRound = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,saltRound);

        const userCreated = await User.create({username,email,phone,password:hashPassword});

        return res.status(200).json({message:"Register successfull",token : await userCreated.generateToken(), userId: userCreated._id.toString()});

    } catch (error) {
        
    }
}

//login user logic
const login = async (req,res) => {
    try {
        const {email,password} = req.body;

        //check user register or not
        const userExist = await User.findOne({email});
        if(!userExist){
            return res.status(400).json({message:"invlaid email or password"});
        }

        //compare password
        const user = await bcrypt.compare(password,userExist.password);

        if(user){
            return res.status(200).json({message:"Login Successfull",token : await userExist.generateToken(), userId: userExist._id.toString()});
        }else{
            return res.status(400).json({message:"invlaid email or password"});
        }

    } catch (error) {
        
    }
}

//get user data
const getUserData = async (req,res) => {
    try {
        const userData = req.user;
        if(!userData){
            return res.status(400).json({message:"usre data not found"})
        }

        return res.status(200).json(userData);
    } catch (error) {
        
    }
}

module.exports = {register,login,getUserData}