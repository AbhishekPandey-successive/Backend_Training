// Write a series of middleware functions and chain them together to demonstrate how multiple middleware can be applied to a single route.

const express=require('express')
const app = express();


const dotenv = require("dotenv");
const env = dotenv.config().parsed;
const PORT = process.env.PORT || 4040;

function m1(req, res, next) {
        console.log("middleware 1");
        next();
}

function m2(req, res, next) {
        console.log("middleware 2");
        next();
}

function m3(req, res, next) {
        console.log("middleware 3");
        next();
}
const combined = [m1, m2,m3];


app.get("/", combined, (req, res) => res.send("Hello world!"));


app.listen(PORT,()=>{
        console.log("Server started on the port", PORT)
    })