import express from "express";
import cors from "cors";
import mongoose from 'mongoose';
import loginRouter from './Route/login.route.js'
const app = express()
app.use(express.json())
app.use(cors())
app.use('/api',loginRouter)
mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(()=> {
    console.log("mongodb Connected successfully")
}).catch((error)=> {
    console.log("mongodb connection error:" , error.message)
});

app.listen(8080, ()=> {
    console.log(`server is running on http://localhost:8080`)

})