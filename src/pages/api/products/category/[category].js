import products from "data/products";

const Handler = (req, res) => {
  const category = req.query.category;
  const filteredProducts = products.filter((prod) => prod.category == category)
  res.status(200).json(filteredProducts);
};

export default Handler;
