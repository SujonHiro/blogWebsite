import express from "express";
import userController from "./user.controller.js";
import auth from "../../middleware/auth.js";
const router=express.Router()


router.get('/',userController.getUser)
router.get('/:email',auth("admin","user"),userController.getSpecificUser)
router.post('/signup',userController.createUser)
router.post('/login',userController.loginUser)


export default router;