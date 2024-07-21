// 1. Import Express
import express from "express";
import ProductRoutes from "./src/features/product/product.routes.js";
import bodyParser from "body-parser";

// 2. Create Server
const server = express();

// Use Body Parser for Post Request
server.use(bodyParser.json());

//  Handle Routes for Products
// for all requests related to product, redirect to product routes.
// localhost:3200/api/products
server.use("/api/products", ProductRoutes);

// Specify Port
server.listen(3200, () => {
  console.log("Listening on port 3200");
});
