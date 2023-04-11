import cartProducts from "data/cartProducts";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(cartProducts);
  } else if (req.method === "POST") {
    const newProduct = req.body;
    const productIndex = cartProducts.findIndex(
      (prod) => prod.product.id == newProduct.product.id
    );
    if (productIndex == -1) {
      cartProducts.push(newProduct);
    } else {
      cartProducts[productIndex].quantity += newProduct.quantity;
    }
    res.status(201).json(newProduct);
  }
}
