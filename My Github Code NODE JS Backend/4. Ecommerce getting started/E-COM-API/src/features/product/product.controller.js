import ProductModel from "./product.model.js";

export default class ProductController {
  getAllProducts(req, res) {
    // Code for getting all products
    const products = ProductModel.GetAll();
    res.status(200).send(products);
  }

  addProduct(req, res) {
    // Code for adding a product
    console.log(req.body);
    const { name, price, sizes } = req.body;

    const newProduct = {
      name,
      price: parseFloat(price),
      sizes: sizes.split(","),
      //   imageUrl: req.file.filename,
    };

    const createdRecord = ProductModel.add(newProduct);
    res.status(201).send(createdRecord);
  }

  rateProduct(req, res) {
    // Code for rating a product
  }

  getOneProduct(req, res) {
    // Code for getting one product
  }
}
