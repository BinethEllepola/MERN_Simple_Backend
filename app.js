//pass - OHIc1SKNmmpdIoXv
const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Middleware
app.use("/",(req, res, next)=>{
    res.send("It is working");

})

mongoose.connect("mongodb+srv://admin:OHIc1SKNmmpdIoXv@cluster0.ysesjrj.mongodb.net/")
.then(()=> console.log("Connecterd mongo DB"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log((err)));