import user from '../Modal/loginModal.js'
export const userCreate=async (req,res)=>{
    const response=await user.create(req.body)
    res.json({data:response})
}
export const userFind = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userRecord = await user.findOne({ email });

    if (!userRecord) {
      return res.send("No record exists");
    }

    if (userRecord.password !== password) {
      return res.send("The password is incorrect");
    }

    res.send("Success");
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getUser = async (req, res) => {
  try {
        const response  = await user.find()
          
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
