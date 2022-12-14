const db = require("../models");
const Product = db.product;

exports.getProductList = (req, res) => {
  console.log(req.query)
  if (req.query.category_id == 0) {
    Product.
      find().
      exec((err, data) => {
        if (err) {
          res.status(500).send("Server Error");
        }
        res.status(200).send(data);
      });
  }
  else {
    Product.
      find({ "category": req.query.category_id }).
      exec((err, data) => {
        if (err) {
          res.status(500).send("Server Error");
        }
        res.status(200).send(data);
      });
  }
}

exports.addProduct = (req, res) => {
  console.log(req.body);
  const data = req.body;
  const product = new Product({
    name: data.name,
    SKU: data.sku,
    brand: data.brand,
    cost: data.cost,
    category: data.category,
    specific: data.spec,
  })
  product.save(function (err, product) {
    if (err) res.status(500).send({ message: err })
    else res.send({ message: "Product was registered successfully!" })
  });
}