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

    getUpdateProductView(req,res,next){
        // Get the id from the request
        const id = req.params.id;
        let productFound = ProductModel.getById(id)

        // Ask the model if id is present
        if(productFound){
            res.render('update-product',{
                product:productFound,
                errorMessage:null
            })
        }
        else{
            res.send("Product Not Found")
        }

        // If product found return the UpdateProductView

    }

    deleteProduct(req, res){
        const id = req.params.id;
        const productFound = ProductModel.getById(id);
          if (!productFound){
            return res.status(401).send('Product not found');
          }
        ProductModel.delete(id);
        var products = ProductModel.getAllProducts();
        res.render('products', { products });
      }

    postUpdateProduct(req,res){
        ProductModel.update(req.body)
        let products = ProductModel.getAllProducts()
        res.render('products',{
            products:products,
            errorMessage:null
        })
    }
}