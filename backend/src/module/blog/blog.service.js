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

const getBlogsServices=async (searchText,limit)=>{
    let query={};
    if(searchText){
        query.$or=[
            {title:{$regex:searchText,$options:"i"}},
            {content:{$regex:searchText,$options:"i"}}
        ]
    }
    const blogs=await blogModel.find(query)
        .limit(limit)
        .populate("comments")
    return blogs
}

const getSingleBlogService=async (blogId)=>{
    const singleBlog=await blogModel.findById(blogId)
    return singleBlog
}
export default {
    createBlogService,updateBlogService,getBlogsServices,getSingleBlogService
}