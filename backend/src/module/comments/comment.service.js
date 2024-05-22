import commentModel from "./comment.model.js";

const commentService=async (userData,commentData)=>{
    const {comment,author,blog}=commentData;
    if(!userData){
        throw new Error("Unauthorized")
    }
    const newComment=await commentModel.create({
        comment,
        author,
        blog
    })
    await newComment.populate("author")
    const updatedBlog = await blogModel.findByIdAndUpdate(
        blog,
        { $push: { comments: newComment._id } },
        { new: true }
    );

    return {newComment,updatedBlog};
}
export default {
    commentService
}