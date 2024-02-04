import express from "express";
const router=express.Router();
import blogRoutes from "../module/blog/blog.routes.js"
import userRoute from "../module/user/user.route.js"
import commentRoute from "../module/comments/comment.route.js";
const moduleRoutes=[
    {
        path:"/user",
        route:userRoute,
    },
    {
        path: "/blogs",
        route: blogRoutes,
    },
    {
        path: "/comment",
        route: commentRoute,
    }
]

moduleRoutes.map((routes) => {
    router.use(routes.path, routes.route)
})

export default router;