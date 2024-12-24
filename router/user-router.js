const express = require("express");
const router = express.Router();
const userController = require("../controller/user-controller");
const authMiddelware = require("../middelware/authMiddelware");

//register
router.route("/register").post(userController.register);

//login
router.route("/login").post(userController.login);

//user data
router.route("/user").get(authMiddelware,userController.getUserData);

module.exports = router
