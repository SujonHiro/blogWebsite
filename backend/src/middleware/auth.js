import {verifyToken} from "../helper/jwtHelper.js";

const auth=(...roles)=>(req,res,next)=>{

    try{
        const token=req.headers.authorization
        if(!token){
            throw new Error("UnAuthorization");
        }
        let verified=null;
            verified=verifyToken(token,process.env.SECRET_KEY)
            req.user=verified;

        if (!roles.includes(verified.role)){
            throw new Error("UnAuthorization access");
        }
        next();
    }catch (error) {

        next();
    }
}

export default auth;