import mongoose from "mongoose";

const userSechema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    writtenBlogs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Blog",
        default:[]
    }],
    profileImg:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['admin','user'],
        required:true,
        default:'user'
    },
    gems:{
        type:Number,
        default: 0
    }
},{
    timestamps:true,
    versionKey:false
})
const userModel=mongoose.model('users',userSechema);
export default userModel;