//const userModel = require("./models/user.modal")
const userModel = require("../models/user.model")
//find by name // delete // 
//another route product /field => name , descrpition ,qty, price, category // id //populate
//antther route categoay field name
const getUser = async (req, res) => {
  try {
        const response  = await userModel.find()
          
        res.status(200).json({
            length: response.length,
            data: response,
            success: true,
            message: "get user list"
    })
    } catch (error) {
        res.status(500).json({
            message: error.message
       
 
 
})}}

const getUserDetail = async (req, res) => {
  try {
        const response  = await userModel.findById(req.params.id)
          
        res.status(200).json({
            length: response.length,
            data: response,
            success: true,
            message: "get user list"
    })
    } catch (error) {
        res.status(500).json({
            message: error.message
       
 
 
})}}

const getUserOne=async(req,res)=>{
const response = await userModel.findOne({ name: 'zuzumay' });
        if (response){
            res.json(response)} 
        else {
            res.json('User not found');
}
}

const userUpdate =   async (req, res) => {
  try {
        const response  = await userModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
          
        res.status(200).json({
            data: response,
            success: true,
            message: "get user list"
    })
    } catch (error) {
        res.status(500).json({
            message: error.message
       
 
 
})}}
const createUser = async (req, res) => {
  
    const { name, email, password } = req.body;

    if(!name || !email || !password ) {
        return res.status(400).json({
            "message": "Please Provide name ,email and password"
        })
    }

    try {
        const response  = await  userModel.create({
            name,
            email,
            password
        })
        res.status(201).json({
                success: true,
                message: "user created successfully",
                data: response
            })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deleteUser=async (req, res) => {
    try{
         const response=await userModel.findByIdAndDelete(req.params.id);
         res.status(200).json({
            data:response,
         })
         res.json({ message: 'User deleted' });
    }
    catch(err){console.log(err.message)}
}

const deleteUserMany=async(req,res)=>{
    const result = await userModel.deleteMany({ name: 'zuzumay3' });
    res.json(result)
}
module.exports = {
    getUser, createUser, getUserDetail, userUpdate,deleteUserMany,deleteUser,getUserOne
}