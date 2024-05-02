// Write a series of middleware functions and chain them together to demonstrate how multiple middleware can be applied to a single route.

const express=require('express')
const app = express();

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

app.listen(4300,()=>{
    console.log("Server started at Local Port 4300")
})