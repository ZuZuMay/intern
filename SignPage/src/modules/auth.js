const express= require('express')
const { User} = require('./modules/user')
const Joi=require('joi')
const bcrypt=require('bcrypt')
const { validate } = require('./user')
Router.post('/',async(req,res)=>{
    try{
        const{error}=validate(req.body)
        if(error)
            return res.status(400).send({message:error.details[0].message})
        const user=await User.findOne({email:req.body.email})
        if(user)
            return res.status(409).send({message:"Invalid Email or password"})
        const validPassword=await bcrypt.compare(req.body.password,user.password)
        if(!validPassword)
             return res.status(409).send({message:"Invalid Email or password"})
        const token=user.generateAuthToken();
        res.status(200).send({data:token,message:'Logged in succsssfully'})
    }
    catch(error){
        res.status(500).send({message:"Interal Server error"})
    }
})

const validate=(data)=>{
    const schema=Joi.object({
           email:Joi.string().email().required().label("Email"),
           password:Joi.string().required().label("Password")
        })
        return schema.validate(data)
    }
    module.exports=router
