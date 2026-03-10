const mongoose = require("mongoose")
const Schema = mongoose.Schema

//schema object creation
const userSchema = new Schema({
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
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    status:{
        type:Boolean,
        default:true
    }
})

module.exports = mongoose.model("users",userSchema)