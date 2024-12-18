const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    }
})

const User=mongoose.model("User",userSchema)

module.exports=User;