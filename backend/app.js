import express from "express";
const app=express()
import helmet from "helmet";
import cors from "cors";
import hpp from "hpp";
import httpStatus from "http-status";
import dotenv from "dotenv"

dotenv.config()

import router from "./src/routes/routes.js"

//middleware
app.use(helmet())
app.use(hpp())
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.get('/',(req,res)=>{
    res.send("server is running ! You can Assured");
})

app.use('/api/v1',router)

app.use((req,res)=>{
    res.status(httpStatus.NOT_FOUND).json({
        status:false,
        message:"Route not found",
        errorMessage:[{
                path:"",
            message:"Api Not Found"
        }]
    })
})

export default app;