import express from 'express';
import path from 'path';
import expressLayouts from "express-ejs-layouts"
import ProductsController from './src/controllers/products.controller.js';

const server = express()

server.set('view engine','ejs')
server.set('views',path.join(path.resolve(),'src','views'))


server.use(expressLayouts);

//instance of ProductsController
const productController = new ProductsController()

server.use(express.static('src/views')) // Check at http://localhost:3400/products.html

server.get("/",productController.getProducts)

server.listen(3400,()=>{
    console.log("Server is listening at port 3400")
})