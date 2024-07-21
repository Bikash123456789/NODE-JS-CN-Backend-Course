// 1. Import Express
import express from "express";
import ProductRoutes from "./src/features/product/product.routes.js";

// 2. Create Server
const server = express();

// 3. Handle Routes for Products
// for all requests related to product, redirect to product routes.
// localhost:3200/api/products
server.use("/api/products", ProductRoutes);

// 4. Specify Port
server.listen(3200, () => {
  console.log("Listening on port 3200");
});
