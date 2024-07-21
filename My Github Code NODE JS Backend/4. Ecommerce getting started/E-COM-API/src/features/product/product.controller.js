import ProductModel from "./product.model.js";

export default class ProductController {
  getAllProducts(req, res) {
    // Code for getting all products
    const products = ProductModel.getAll();
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
    const id = req.params.id;
    const product = ProductModel.get(id);
    if (!product) {
      res.status(404).send("Product Not Found");
    } else {
      return res.status(200).send(product);
    }
  }
}
