const express = require('express');
const app = express();

const dotenv = require("dotenv");
const env = dotenv.config().parsed;
const PORT = process.env.PORT || 4040;

const userRouter = require('../src/routes/userValidationsService');

const userRouter1=require('../src/routes/userJoiValidation')

const userRouter2=require('../src/routes/userMiddlewareValidation')

const userRouter3=require('../src/routes/userGeolocation')

app.use('/day1',userRouter)
app.use('/day1',userRouter1)
app.use('/day1',userRouter2)
app.use('/day1',userRouter3)


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
