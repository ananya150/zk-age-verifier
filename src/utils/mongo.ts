import mongoose from "mongoose"

const uri = process.env.MONGO_STRING || '';

export const connectMongo = async () => {    
    try{
        mongoose.connect(uri);
        console.log("Connected");
    }catch(error){
        console.log("COnnection failed")
        console.log(error)
    }
}