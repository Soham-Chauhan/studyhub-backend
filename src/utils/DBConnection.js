const mongoose = require("mongoose")

const dbConnection = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/2026_internship_learning")
    .then(()=>{
        console.log("DB is connected.....")
    })
    .catch((err)=>{
        console.log("DB is not connected....",err)
    })
}

module.exports = dbConnection