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
    }
})

module.exports = mongoose.model("products",productSchema)
