import userModel from "./user.model.js";
import {createToken} from "../../helper/jwtHelper.js";

const createUserService=async (userData)=>{
    const user=await userModel.findOne({email:userData.email});
    if(user){
        throw new Error("Email is already use");
    }
    const newUser= await userModel.create(userData)
    return newUser;
}

const loginUserService=async (loginData)=>{
    const user=await userModel.findOne({email: loginData.email,password:loginData.password})

    if (!user){
        throw new Error("User not found");
    }
    /*if(user.password !== loginData.password){
        throw new Error("Incorrect Password");
    }*/
    const {email,role}=user;
    const accessToken=createToken({email,role},process.env.SECRET_KEY,"1d")

    return {accessToken}
}

const getUserServices=async (userData)=>{

    if(userData.role !=="admin"){
        throw new Error("UnAuthorized");
    }
    const users=await userModel.find()
    return users;
}

const getSpecificUserService=async (userEmail,userData)=>{
    if(userData.role==="admin"){
        const user=await userModel.findOne({email: userEmail})
        return user;
    }
    if(userData.role==="user"){
        const user=await userModel.findOne({email: userEmail})
        return user;
    }
    return "unauthorized service";

}
export default {
    createUserService,
    loginUserService,
    getUserServices,
    getSpecificUserService
}