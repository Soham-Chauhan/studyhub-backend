const mongoose = require("mongoose")
const Schema = mongoose.Schema

//schema object creation
const productSchema = new Schema({
    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productColors:[{
        type:String,
    }],
    productSize:{
        enum:["S","M","L","XL","XXL"],
        type:String
    }
})

module.exports = mongoose.model("products",productSchema)
