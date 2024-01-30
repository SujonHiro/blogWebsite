const createUser=(req,res)=>{

    res.status(201).json({
        status:true,
        message:"User Created"
    })
}

const getUser=(req,res)=>{
    res.status(200).json({
        status:true,
        message:"User get Successfully"
    })
}

export default {
    createUser,
    getUser
}