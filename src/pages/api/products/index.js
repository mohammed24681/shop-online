import products from "data/products";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(products);
  } else if (req.method === "POST") {
    const product = req.body;
    products.push(product);
    res.status(201).json(product)
  }
}
