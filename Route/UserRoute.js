const express = require("express");
const router= express.Router();
//inster model
const User = require("../Model/UserModel");
//insert user controller
const UserController = require("../Controlers/UserControllers");

router.get("/",UserController.getAllUsers);
router.post("/",UserController.addUsers);
router.get("/:id",UserController.getById);
router.put("/:id",UserController.updateUser);
//export
module.exports = router;
