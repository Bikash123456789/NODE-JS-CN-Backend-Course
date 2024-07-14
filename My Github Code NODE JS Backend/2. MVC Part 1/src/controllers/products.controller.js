import path from "path";
import ProductModel from "../models/product.model.js";

export default class ProductsController {
    getProducts(req,res){
        let products = ProductModel.getAllProducts()
        console.log(products)
        // res.sendFile(path.join(path.resolve(),"src",'views','products.html'))
        res.render('products',{products:products})
    }

    getAddForm(req,res){
        res.render('new-product',{errorMsg:null})
    }

    postAddProduct(req,res){
        console.log(req.body)
        
    
        ProductModel.addProduct(req.body)
        let products = ProductModel.getAllProducts()
        res.render('products',{products:products})
        

        
    }
}