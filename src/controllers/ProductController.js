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

    try{
        const savedProduct = await productSchema.create(req.body)
        res.status(201).json({
            message:"product saved..",
            data:savedProduct
    })
    }
    catch(err){
        res.status(500).json({
            message:"error while creating product....",
            err:err
        })
    }
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

const updateProduct = async(req,res)=>{
    
    // update products ,,, where id=? --? sql query
    // db.product.updateOne({$set:{,,,,},{_id:,,,}}) ---> mongodb query
    // new data to upadate : req.body ---> data ayenga body mese
    // where ?? id : req.parmas ---> id ayengi params me se kisi perticluer data ko id ke basis pe update karane ke liye

    // const updateObj = await productSchema.findByIdAndUpdate(req.params.id, req.body)
    const updateObj = await productSchema.findByIdAndUpdate(req.params.id, req.body,{new:true})

    
        res.status(200).json({
            message:"data updated..",
            data:updateObj
        })
   
}

const addColor = async(req,res)=>{

    try{
        const addColorObj = await productSchema.findByIdAndUpdate(req.params.id,{$push:{productColors:req.body.color}},{new:true})

        res.status(200).json({
            message:"color added...",
            data:addColorObj
        })
    }
    catch(err){
            res.status(500).json({
                 message:"not added color",
                err:err
        })
    }
}

const removeColor = async(req,res)=>{

    try{
        const removeColorObj = await productSchema.findByIdAndUpdate(req.params.id,{$pull:{productColors:req.body.color}},{new:true})

        res.status(200).json({
            message:"color removed....",
            data:removeColorObj
        })
    }
    catch(err){
            res.status(500).json({
                 message:"not remove color",
                err:err
        })
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct,
    updateProduct,
    addColor,
    removeColor 
}
