import express from 'express';
import path from 'path';
import expressLayouts from "express-ejs-layouts"
import ProductsController from './src/controllers/products.controller.js';
import validateRequest from './src/middlewares/product.middleware.js';

const server = express()

server.use(express.urlencoded({"extended":true}))

server.set('view engine','ejs')
server.set('views',path.join(path.resolve(),'src','views'))


server.use(expressLayouts);

//instance of ProductsController
const productController = new ProductsController()

server.use(express.static('public')) // Check at http://localhost:3400/products.html

server.get("/",productController.getProducts)
server.get("/new",productController.getAddForm)
server.post("/", validateRequest,productController.postAddProduct)
server.get("/update-product/:id",productController.getUpdateProductView)
server.get("/update-product/:id",productController.getUpdateProductView)
server.post(
    '/update-product',
    productController.postUpdateProduct
  );
  server.post(
    '/delete-product/:id',
    productController.deleteProduct
  );


server.listen(3400,()=>{
    console.log("Server is listening at port 3400")
})