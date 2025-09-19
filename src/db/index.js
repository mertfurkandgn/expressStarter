import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
        console.log(` MongoDB connected! DB HOST: ${connectionInstance.connection.host}`)
    }catch(error){
        console.error(error,"Not connected db")

    }
}

export default connectDB;