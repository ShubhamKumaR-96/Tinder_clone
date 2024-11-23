
const mongoose =require("mongoose")

const connectDB=async ()=>{
    await mongoose.connect("mongodb+srv://magicmomentum22:R9rtllr3ydT7oXho@cluster0.n1gwa.mongodb.net/devtinder")
}

module.exports={
    connectDB
}