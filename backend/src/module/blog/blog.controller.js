import blogService from "./blog.service.js";

const createBlog=async (req,res)=>{
    try{
        const userData=req.user;
        const blogData=req.body;
        const result=await blogService.createBlogService(userData,blogData)
        res.status(200).json({
            status:true,
            data:result
        });
    }catch(error) {
        res.status(400).json({
            status:'false',
            data:error.message
        })
    }
}

const updateBlog=async (req,res)=>{
    try{
        const blogId=req.params.id;
        const blogData=req.body;

        const result=await blogService.updateBlogService(blogId,blogData);
        res.status(200).json({
            status:true,
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
    createBlog,
    updateBlog
}