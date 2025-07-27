//pass - OHIc1SKNmmpdIoXv
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/UserRoute");
const app = express();

//Middleware
app.use("/users",router);

mongoose.connect("mongodb+srv://admin:OHIc1SKNmmpdIoXv@cluster0.ysesjrj.mongodb.net/")
.then(()=> console.log("Connecterd mongo DB"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log((err)));