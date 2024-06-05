// Write a series of middleware functions and chain them together to demonstrate how multiple middleware can be applied to a single route.

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

export {combined}