import express from "express";
const router=express.Router();

import userRoute from "../module/user/user.route.js"
const moduleRoutes=[
    {
        path:"/user",
        route:userRoute,
    },
    /*{
        path: "/blogs",
        route: ""
    }*/
]

moduleRoutes.map((routes) => {
    router.use(routes.path, routes.route)
})

export default router