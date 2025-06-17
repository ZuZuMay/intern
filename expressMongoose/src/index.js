const express = require("express");
const userRouter = require("./routes/user.router")
const productRouter=require("./routes/product.router")
const mongoose = require('mongoose');

const app = express()

app.use(express.json())

app.use('/user', userRouter)
app.use('/product',productRouter)

mongoose.connect('mongodb://127.0.0.1:27017/test').then(()=> {
    console.log("mongodb Connected successfully")
}).catch((error)=> {
    console.log("mongodb connection error:" , error.message)
});



app.listen(8080, ()=> {
    console.log(`server is running on http://localhost:8080`)

})