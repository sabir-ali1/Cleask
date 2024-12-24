const User = require("../models/user-models");

//get user data for admin
const getUser = async (req,res) => {
    try {
        const user = await User.find().select({password:0});
        if(!user){
            return res.status(400).json({message:"user is not available"});
        }

        return res.status(200).json(user);

    } catch (error) {
        console.log("error from get user data for admin",error);
    }
}

//delete user
const deleteUser = async (req,res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({_id:id});

        return res.status(200).json({message:"User Delete Successfull"});

    } catch (error) {
        console.log("error from delete user",error);
    }
}


module.exports = {getUser,deleteUser}