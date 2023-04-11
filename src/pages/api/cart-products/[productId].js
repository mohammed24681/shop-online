import cartProducts from "data/cartProducts";

export default function Handler(req, res) {
  const productId = req.query.productId;
  const product = cartProducts.find((prod) => prod.id == productId);
  if (req.method === "DELETE") {
    const index = cartProducts.findIndex((prod) => prod.id == productId);
    cartProducts.splice(index, 1);
    res.status(200).json(product);
  }
}
