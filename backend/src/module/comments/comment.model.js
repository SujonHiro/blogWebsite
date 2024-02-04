import mongoose from "mongoose";

const commentSchema=new mongoose.Schema({
    comment:{
        type:String,
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required: true
    },
    blog:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'blogs',
        required: true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

},{versionKey:false})

const commentModel=mongoose.model('comments',commentSchema)

export default commentModel