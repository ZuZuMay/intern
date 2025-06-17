const mongoose=require("mongoose")
const productSchema=new mongoose.Schema(
{
  id:{
    type:Number,
    unique:true
  },
     name: {
       type: String,
       required: true,
       trim: true
     },
     description: {
       type: String,
       required: false,
     },
     price: {
       type: Number,
       required: true
     },
     category: {
       type: String,
     },
     stock: {
       type: Number,
       required:true
     }
   }
)
module.exports=mongoose.model('product',productSchema)