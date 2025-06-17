const productModel= require("../models/product.model.js")
const getProduct= async (req,res)=>{
    try {
            const response  = await productModel.find()
            res.status(200).json({
                length: response.length,
                data: response,
                success: true,
                message: "get product list"
        })
        } catch (error) {
            res.status(500).json({
                message: error.message
     
    })}
}
const getProductDetail = async (req, res) => {
  try {
        const response  = await productModel.findById(req.params.id)
          
        res.status(200).json({
            length: response.length,
            data: response,
            success: true,
            message: "get product list "
    })
    } catch (error) {
        res.status(500).json({
            message: error.message
       
 
 
})}}
const getProductOne=async(req,res)=>{
const response = await productModel.findOne({ name: 'Coffee Maker' });
        if (response){
            res.json(response)} 
        else {
            res.json('User not found');
}
}
const updateProduct =   async (req, res) => {
  try {
        const response  = await productModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
          
        res.status(200).json({
            data: response,
            success: true,
            message: "get updated product list"
    })
    } catch (error) {
        res.status(500).json({
            message: error.message   
})}}

const deleteProduct=async (req, res) => {
    try{
         const response=await productModel.findByIdAndDelete(req.params.id);
         res.status(200).json({
            data:response,
         })
         res.json({ message: 'User deleted' });
    }
    catch(err){console.log(err.message)}
}

const deleteProductMany=async(req,res)=>{
    const result = await productModel.deleteMany({ name: 'Bluetooth Headphones' });
    res.json(result)
}

const createProduct = async (req, res) => {
  
    const { name,description, price, stock} = req.body;

    if(!description|| !name || !price || !stock ) {
        return res.status(400).json({
            "message": "Please Provide name ,price and stock"
        })
    }
const lastProduct = await productModel.findOne().sort({ id: -1 });
const newId = lastProduct ? lastProduct.id + 1 : 1;
    try {
        const response  =  productModel.create({
            id:newId,
            description,
            name,
            price,
            stock
        })
        res.status(201).json({
                success: true,
                message: "product created successfully",
                data: response
            })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
const countDocument=async(req,res)=>{
 const count = await productModel.countDocuments();
res.status(300).json(`Total users: ${count}`);

}

module.exports = {
    getProduct, createProduct, getProductDetail, updateProduct,deleteProduct,deleteProductMany,getProductOne,countDocument
}
