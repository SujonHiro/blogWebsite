import app from "./app.js";
import mongoose from "mongoose";

const port = process.env.PORT || 6000


async function main(){
    try{
        await mongoose.connect(process.env.DBURL)
        console.log("Database Connected")
        app.listen(port,()=>{
            console.log("Server is running port "+ port)
        })
    }catch (e){
        console.log(e)
    }
}
main();