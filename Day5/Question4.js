// .Create an asynchronous route that intentionally throws an error.Implement error handling for asynchronous errors within the route.Send an appropriate response to the client, indicating the error.

const express = require('express');
const app = express();

const dotenv = require("dotenv");
const env = dotenv.config().parsed;
const PORT = process.env.PORT || 4040;


app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
});


app.get('/error', async (req, res, next) => {
    try {
         throw new Error('This is an intentional error');
        }

   catch (error) {
        
        next(error);
    }
});

app.listen(5700,()=>{
    console.log("Server is Running on Local Port 5700")
})


app.listen(PORT,()=>{
    console.log("Server started on the port", PORT)
})






