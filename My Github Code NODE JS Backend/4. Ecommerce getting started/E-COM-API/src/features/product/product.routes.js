import express from "express";
import ProductController from "./product.controller.js";
import { upload } from "../../middlewares/fileupload.middleware.js";

// Initialize the Router.
const router = express.Router();

// Initialize an instance of the ProductController class.
const productController = new ProductController();

// Handle the Routes
router.get("/", productController.getAllProducts);
router.post("/", upload.single("imageUrl"), productController.addProduct);
router.get("/:id", productController.getOneProduct);
// router.post("/rate", productController.rateProduct);

export default router;
