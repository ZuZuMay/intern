const product=[
    {
        p:1,
        name:'Laptop'
        
    },
    {
        p:2,
        name:'Phone'
    }
]
export const productGet=(req,res)=>{
    const id=req.params.id
    console.log(id)
    res.send("ID number is "+ id)
}
export const productList=(req,res)=>
{
    res.json(product.map(p=>p))
}
export const productUpload=(req,res)=>
{
    const {id,name}=req.params
    console.log(id,name)
    res.send("ID number is "+id+"\t"+"Name is "+name)
}
export const productTest=(req,res)=>{
    const id=req.params.id
    const edit=req.body.name
  res.send("ID number is "+id+".\t"+"Edit name is "+edit)
}