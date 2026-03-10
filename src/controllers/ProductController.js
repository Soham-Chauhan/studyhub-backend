// database model
const productSchema = require("../models/ProductModel")
// productSchema == products table ----> connected database

const getAllProducts = async (req,res) =>{
    //select * from products;
    //db.products.find()
    //db.products == productSchema
    //productSchema.find()

    const allProducts = await productSchema.find()
    //response...
    res.json({
        message:"all products fetched....",
        data:allProducts
    })
}

const getProductById = async(req,res)=>{
    //res.params.id
    // const foundProduct = await productSchema.find({_id:req.params.id}) [] --> return type array hai
    
   
    const foundProduct = await productSchema.findById(req.params.id) // {} --> return type object hai
    
    if(foundProduct){
        res.json({
            message:"product found..",
            data:foundProduct
        })
    }
    else{
        res.json({
            message:"product not found.."
       
        })
    }
}
    
const addProduct = async(req,res)=>{
    console.log("request body....",req.body)
    const savedProduct = await productSchema.create(req.body)
    res.status(201).json({
        message:"product saved..",
        data:savedProduct
    })
}

const deleteProduct = async(req,res)=>{
    
    // delete form products where id=? --> sql query
    // db.products.removeOne({_id:}) ---> mongodb query
    // productSchema.removeOne({_id:req.params.id}) ---> mongoose query

    // productSchema.findByIdAndDelete(req.params.id) ---> simple and short way

    const deleteProductObj = await productSchema.findByIdAndDelete(req.params.id)

    if(deleteProductObj){
        res.status(200).json({
            message:"product deleted...",
            data:deleteProductObj
        })
    }
    else{
        res.status(200).json({
            message:"product not found to delelte..."
        })
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct  
}
