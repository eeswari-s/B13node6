import User from "../Models/UserModel.js";

//create user

export const createUser = async(req,res)=>{
    try{
        const user = await User.create(req.body);
        res.status(201).json({
            message:"user created successfully",
            user
        });
    }catch(error){
        res.status(400).json({error:error.message});
    }
};

//get users
export const getAllUsers = async (req, res)=> {
    const users = await User.find();
    res.json(users);
};

//get user by id
export const getUserById = async(req,res)=>{
    const user = await User.findById(req.params.id);
    res.json(user);
};

//update user

export const updateUser =async (req,res)=>{
    const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.json(updateUser);
};

//delete user

export const deleteUser = async(req,res) =>{
    await User.findByIdAndDelete(req.params.id);
    res.json({message:"user deleted successfully"});
};