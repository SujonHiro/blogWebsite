
import mongoose from "mongoose";

const ILikeType={
    email:String
}
const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required: true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    tags:[{
        type:String,
        required:true,
        default:[]
    }],
    image:{
        type:String,
        required:true
    },
    likes:[{
        type:ILikeType,
        required:true,
        default:[]
    }],
    shares:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        default:[]
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comments",
        default: []
    }],
    createdAt:{
        type:Date,
        default:Date.now()

    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }

},{
    timestamps:true,
    versionKey:false
})
const blogModel=mongoose.model('blogs',blogSchema);
export default blogModel;