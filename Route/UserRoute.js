const express = require("express");
const router= express.Router();
//inster model
const User = require("../Model/UserModel");
//insert user controller
const UserController = require("../Controlers/UserControllers");

router.get("/",UserController.getAllUsers);
router.post("/",UserController.addUsers);
//export
module.exports = router;
