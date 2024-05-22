import commentService from "./comment.service.js";

const postComment=async(req,res)=>{
    try{
        const userData=req.user;
        const commentData=req.body;

        const result=await commentService.commentService(userData,commentData)
        res.status(200).json({
            status:"true",
            data:result
        });
    }catch(error) {
        res.status(400).json({
            status:'false',
            data:error.message
        })
    }
}

export default {
    postComment
}