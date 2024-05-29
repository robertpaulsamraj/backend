import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(
            // "mongodb+srv://robertpaulsamraj:EsH292MyxmhvheWg@cluster0.srprfpg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
            process.env.MONGODB_URL
        )
        console.log("Mongodb connected...")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

export default connectDB;