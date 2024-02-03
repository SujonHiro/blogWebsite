import blogModel from "./blog.model.js";

const createBlogService=async (userData,blogData)=>{
    if(!userData){
        throw new Error("Unauthorized");
    }
    const newBlog= await blogModel.create(blogData);
    return newBlog;
}
const updateBlogService = async (blogId, blogData) => {
    const query = { _id: blogId };
    if(!query){
        throw new Error("blog not found")
    }
    const update = await blogModel.updateMany(query, { content:blogData.content, image:blogData.image});
    return update;
};
export default {
    createBlogService,updateBlogService
}