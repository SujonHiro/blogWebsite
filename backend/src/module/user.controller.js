import userService from "./user.service.js"
const createUser=async (req,res)=>{
    try{
        const userData=req.body;
        const user=await userService.createUserService(userData);
        res.status(201).json({
            status:'success',
            data:user
        })
    }catch(error) {
        res.status(400).json({
            status:'false',
            data:error.message
        })
    }
}


const loginUser=async (req,res)=>{
    try{
        const loginData=req.body;
        const result=await userService.loginUserService(loginData)
        res.status(200).json({
            status:'success',
            data:result
        })
    }catch(error) {
        res.status(400).json({
            status:'false',
            data:error.message
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
    createUser,loginUser
}