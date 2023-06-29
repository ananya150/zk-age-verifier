import User , { IUser } from "./model";
import { connectMongo } from "utils/mongo";
import mongoose from "mongoose";

export const getProof = async (address: string) => {
    await connectMongo();
    const user = await User.findOne({address});

    if(!user){
        return {status: false, msg: "not found"};
    }
    if(!user.proof){
        return {status: false, msg: "not found"};
    }
    return {status: true , msg: "proof found" , proof: user.proof};
}

export const addProof = async (address: string , proof: string) => {
    try{
        await connectMongo();
        const user: IUser = new User({
            _id:new mongoose.Types.ObjectId,
            address,
            proof
        });
        await user.save();
        return true;
    }catch(error){
        console.log(error);
        return false;
    }
}

  