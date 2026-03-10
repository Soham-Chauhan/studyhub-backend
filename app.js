// require express
const express = require("express")
const app = express()
app.use(express.json()) // browser ko pata chale ke jo data aa rha hai res.body me se vo json formate me hai isliye ---> global middleware --> it will accept json data


//db connection 
const dbConnection = require("./src/utils/DBConnection")
dbConnection() //calling function

// require all routes
const userRoutes = require("./src/routes/UserRoutes")
const productRoutes = require("./src/routes/ProductRoutes")

// use all routes in express
app.use("/user",userRoutes)
app.use("/prod",productRoutes)


// server creation
const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server started on PORT ${PORT}`)
   
})

