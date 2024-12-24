const express = require("express");
const router = express.Router();
const adminUser = require("../admin-controller/user-controller");
const authMiddelware = require("../middelware/authMiddelware");
const adminMiddleware = require("../middelware/adminMiddelware");

//get user data
router.route("/user/get").get(authMiddelware,adminMiddleware,adminUser.getUser);


//delete user
router.route("/user/delete/:id").delete(authMiddelware,adminMiddleware,adminUser.deleteUser);

module.exports = router