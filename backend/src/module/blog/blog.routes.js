import express from "express";
import auth from "../../middleware/auth.js";
import blogController from "./blog.controller.js";
const router=express.Router()

router.post("/create-blog",auth("admin","user"),blogController.createBlog);
router.post("/update-blog/:id",auth("admin","user"),blogController.updateBlog);

export default router