import commentModel from "./comment.model.js";

const postCommentService=async (userData,commentData)=>{
    const {comment,author,blog}=commentData;
    if(!userData){
        throw new Error("Unauthorized")
    }
    const res=await commentModel.create({
        comment,
        author,
        blog
    })
    return res;
}
export default {
    postCommentService
}