// API Creation vo sab controllers me aayengi simple....

const getUsers = (req,res) => {
    console.log("getUsers is called...")
    res.send("users is called....")
}

const getUserData = (req,res) => {
    const userObj = {
        id:101,
        name:"soham",
        age:23,
        salary:14000
    }
    console.log("userdata is called...")
    res.json({
        message:"data is fetched..",
        data:userObj
    })
}

const users = [
    {id:101,name:"soham",age:23,salary:12000},
    {id:102,name:"raj",age:23,salary:12000},
    {id:103,name:"aman",age:23,salary:11000},
    {id:104,name:"het",age:23,salary:32000},
    {id:105,name:"anil",age:23,salary:12000},
]

const getUserById = (req,res) => {
    console.log(req.params.id)
    
    // const foundUser = users.filter((user)=> user.salary == req.params.salary)  // multiple users ko show karane ke liye filter use hota hai 
    const foundUser = users.find((user)=> user.id == req.params.id) // sirf ek user show karane ke liye find use hota hai
    console.log(foundUser)

    if(foundUser){
        res.json({
        message:"user found",
        data:foundUser
      })
    }
    else{
        res.json({
        message:"user not found",
        
    })
    }
    
}
module.exports = {
    getUsers,
    getUserData,
    getUserById
}