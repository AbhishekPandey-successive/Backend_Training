// Create scenarios that generate all possible error codes.

const express=require('express')
const app=express();
const rateLimit=require('express-rate-limit')

app.get('/nonexistent', (req, res) => {
    res.status(404).send('Resource not found');
});


app.get('/bad-request', (req, res) => {
    res.status(400).send('Bad request: The client sent an invalid request.');
});


app.get('/admin', (req, res) => {
   
    if (req.isAuthenticated()) {
        res.send('Welcome to the admin panel');
    } else {
        res.status(403).send('Access forbidden');
    }
});




const rateLimitMiddleware=rateLimit({
    windows:60*1000,
    max:5,
    message:"You have exceeded 5 request per minute",
    headers:true
})

app.use(rateLimitMiddleware)

app.get('/api',(req,res)=>{
    res.send("Rate Limiter")
})


app.listen(5600,()=>{
    console.log("Server Running on Local Port 5600")
})
