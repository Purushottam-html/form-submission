import mongoose from "mongoose"
import 'dotenv/config'

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_PASSWORD}`)
        console.log("mongoDB connected")
    } catch (err) {
        console.log("error: " , err)
    }
}
connectDB()

export default connectDB