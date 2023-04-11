import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCartProducts = createAsyncThunk(
  "cart/fetchAllProducts",
  (_, { getState }) => {
    const data = getState().user.loggedIn
      ? axios
          .get("https://shop-online-sable.vercel.app/api/cart-products")
          .then((res) => {
            return res.data;
          })
      : JSON.parse(localStorage.getItem("cart-products"));
    return data;
  }
);

export const addProductToCart = createAsyncThunk(
  "cart/addProduct",
  (product) => {
    const data = axios
      .post("https://shop-online-sable.vercel.app/api/cart-products", product)
      .then((res) => {
        return res.data;
      });
    return data;
  }
);

export const deleteProductFromCart = createAsyncThunk(
  "cart/deleteProduct",
  (prodId) => {
    const data = axios
      .delete(
        `https://shop-online-sable.vercel.app/api/cart-products/${prodId}`
      )
      .then((res) => {
        return res.data;
      });
    return data;
  }
);

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addProductToCart.fulfilled, (state, action) => {
      const newProduct = action.payload;
      const productIndex = state.products.findIndex(
        (prod) => prod.product.id == newProduct.product.id
      );
      if (productIndex == -1) {
        state.products.push(newProduct);
      } else {
        state.products[productIndex].quantity += newProduct.quantity;
      }
      const cartProducts = JSON.parse(localStorage.getItem("cart-products"));
      if (cartProducts) {
        const storageProductIndex = cartProducts.findIndex(
          (prod) => prod.product.id == newProduct.product.id
        );
        if (storageProductIndex == -1) {
          localStorage.setItem(
            "cart-products",
            JSON.stringify([...cartProducts, newProduct])
          );
        } else {
          cartProducts[storageProductIndex].quantity += newProduct.quantity;
          localStorage.setItem("cart-products", JSON.stringify(cartProducts));
        }
      } else {
        localStorage.setItem("cart-products", JSON.stringify([newProduct]));
      }
      alert("product is added to the cart");
    });
    builder.addCase(deleteProductFromCart.fulfilled, (state, action) => {
      const prodId = action.payload.id;
      state.products.splice(prodId, 1);
      const storageCartProducts = JSON.parse(
        localStorage.getItem("cart-products")
      );
      const storageProductIndex = storageCartProducts.findIndex(
        (prod) => prod.product.id == prodId
      );
      storageCartProducts.splice(storageProductIndex, 1);
      localStorage.setItem(
        "cart-products",
        JSON.stringify(storageCartProducts)
      );
      alert("product is deleted from cart");
    });
    builder.addCase(fetchCartProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default cartSlice.reducer;
