import products from "data/products";

export default function Handler(req, res) {
  const productId = req.query.productId;
  const product = products.find((prod) => prod.id == productId);
  if (req.method === "GET") {
    res.status(200).json(product);
  }
  if (req.method === "DELETE") {
    const index = products.findIndex((prod) => prod.id == productId);
    products.splice(index, 1);
    res.status(200).json(product);
  }
  if (req.method === "PATCH") {
    const index = products.findIndex((prod) => prod.id == productId);
    products[index] = req.body;
    res.status(200).json(req.body);
  }
}
