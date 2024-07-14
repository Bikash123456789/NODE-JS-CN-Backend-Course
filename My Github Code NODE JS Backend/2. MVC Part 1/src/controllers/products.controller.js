import path from "path";
import ProductModel from "../models/product.model.js";

export default class ProductsController {
    getProducts(req,res){
        let products = ProductModel.get()
        console.log(products)
        res.sendFile(path.join(path.resolve(),"src",'views','products.html'))
    }
}