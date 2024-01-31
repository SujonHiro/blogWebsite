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

const getUser=async (req,res)=>{
    try{
        const userData=req.user;
        const {searchText}=req.query;
        const users=await userService.getUserServices(userData,searchText)
        res.status(200).json({
            status:true,
            data:users
        })
    }catch(error) {
        res.status(400).json({
            status:'false',
            data:error.message
        })
    }
}

const getSpecificUser=async (req,res)=>{
    try{
        const userEmail=req.params.email
        const user=await userService.getSpecificUserService(userEmail)
        res.status(200).json({
            status:true,
            data:user
        })
    }catch(error) {
        res.status(400).json({
            status:'false',
            data:error.message
        })
    }
}


export default {
    createUser,
    loginUser,
    getUser,
    getSpecificUser
}