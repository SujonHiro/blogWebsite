import userModel from "./user.model.js";

const createUserService=async (userData)=>{
    const user=await userModel.create(userData);
    return user;
}


export default {
    createUserService
}