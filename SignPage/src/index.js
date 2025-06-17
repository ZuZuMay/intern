require('dotenv').config();
const express=require('express')
const app=express()
const cors=require('cors')
const connection=require('./db.js')
const userRouter=require('./routes/user.route.js')
const authRouter=require('./routes/user.route.js')
connection()
app.use(express.json())
app.use(cors())

app.use('/aoi/users',userRouter)
app.use('./api/auth',authRouter)
const port=process.env.PORT||8080;
app.listen(port,()=>console.log(`Listening on port${port}...`))