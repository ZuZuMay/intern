
const posts=[
    {id:1,title:"aa"},
    {id:2,title:"bb"},
]

export const userCreate=(req, res) => {
    const userlist=[
        {id:1,name:"Su"},
        {id:2,name:"Zin"}
    ]
    res.json({data:userlist})
}

export const userGet=(req, res) => {
    const { name, email } = req.body;
    res.json({
       data: posts
    });
}
export const userUpdate=(req, res) => {
    const userId = req.params.id;
    console.log(req.path)
    const { name, email } = req.body;  // Fixed from req.params.id
    res.json({
        message: `User ${userId} updated to ${name}, ${email}`
    });
}
export const userGetId=(req,res)=>{
    const{name,id}=req.params
    res.json({
        id,
        name
    })
}
export const userList=(req,res)=>{
    const id=parseInt(req.params.id)
     console.log(id)
    res.json(posts.filter((post)=>post.id===id))
 //  res.send("hello")
}

