const adminMiddleware = async (req,res,next) => {
    try {
        
        const adminRole = req.user.isAdmin;
        if(!adminRole){
            return res.status(400).json({message:"User is not a Admin"})
        }

        next();

    } catch (error) {
        console.log("error from admin middelware",error);
    }
}

module.exports = adminMiddleware