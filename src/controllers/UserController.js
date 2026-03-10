// database model
const userSchema = require("../models/UserModel")
// userSchema == users table ----> connected database

const getAllUsers = async (req,res) =>{
    //select * from users;
    //db.users.find()
    //db.users == userSchema
    //userShema.find()

    const allUsers = await userSchema.find()
    //response...
    res.json({
        message:"all users fetched....",
        data:allUsers
    })
}


module.exports = {
    getAllUsers
}