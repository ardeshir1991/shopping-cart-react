const Product = require('./../models/product');

module.exports = class {
    constructor(){
        this.Product = Product;
    }
    showProduct = async(req,res)=>{
        const products = await Product.find({deleted:false});
        res.status(200).json({data: products, message:'ok'});
    }
    createProduct = async(req,res)=>{
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(200).json({data:newProduct, message:'ok'});
    }
    deleteProduct = async(req,res)=>{
        await Product.findByIdAndUpdate(req.params.id,{deleted:true});
        const products = await Product.find({deleted: false});
        res.status(200).json({data:products, message:'ok'});
    }
}