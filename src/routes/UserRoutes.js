const router = require("express").Router()
// require UserController
const userController = require("../controllers/UserController")
// const userControllerDummy = require("../controllers/UserControllerDummy")

// router.get("/dummy",userController.getUsers)
// router.get("/userdata",userController.getUserData)
// router.get("/users/:id",userController.getUserById)


router.get("/users",userController.getAllUsers)

module.exports = router