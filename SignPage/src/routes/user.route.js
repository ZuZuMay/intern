const express= require('express')
const { User,validate } = require('./modules/user')
const router=express.Router()
router.post('/',async(req,res)=>{
    try{
        const {error}=validate(req.body)
        if(error)
            return res.status(400).send({message:error.details[0].message})
        const user=await User.findOne({email:req.body.email})
        if(user)
            return res.status(409).send({message:"User with given email alerady exit"})
        const salt=await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword=await bcrypt.hash(req.body.password,salt)
        await new User({
            ...req.body,password:hashPassword}).save();
        
        res.status(200).send({message:"User created successfully"}) 
    }
    catch(err){
        res.send(400).send({message:"Interal Server error"})
    }
})

