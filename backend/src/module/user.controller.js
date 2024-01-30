import userService from "./user.service.js"
const createUser=async (req,res)=>{
    try{
        const userData=req.body;
        const user=await userService.createUserService(userData)
        res.status(201).json({
            status:'success',
            data:user
        })
    }catch (error) {
        res.status(422).json({
            status:'Unprocessable Entity',
            data:error
        })
    }
}

/*const getUser=(req,res)=>{
    res.status(200).json({
        status:true,
        message:"User get Successfully"
    })
}*/

export default {
    createUser
}