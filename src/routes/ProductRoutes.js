const router = require("express").Router()
// require ProductController
const productController = require("../controllers/ProductController")

router.get("/products",productController.getAllProducts)
router.get("/product/:id",productController.getProductById)
router.post("/product",productController.addProduct)
router.delete("/product/:id",productController.deleteProduct)
router.put("/product/:id",productController.updateProduct)
router.put("/product/color/:id",productController.addColor)
router.put("/product/removecolor/:id",productController.removeColor)


module.exports = router
