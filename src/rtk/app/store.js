import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../app-slices/cartSlice";
import productsReducer from "../app-slices/productsSlice";
import userSlice from "../app-slices/userSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: cartSlice,
    user: userSlice,
  },
});
