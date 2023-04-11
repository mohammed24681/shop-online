import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const data = await fetch("http://localhost:3000/api/products");
    const products = await data.json();
    return products;
  }
);

export const filterByCategory = createAsyncThunk(
  "products/fetchByCategory",
  async (category) => {
    const data = await fetch(
      `http://localhost:3000/api/products/category/${category}`
    );
    const filterProducts = await data.json();
    return filterProducts;
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    const res = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();
    return data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId) => {
    const res = await fetch(`http://localhost:3000/api/products/${productId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product) => {
    const res = await fetch(
      `http://localhost:3000/api/products/${product.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );
    const data = await res.json();
    return data;
  }
);

const initialState = {
  loading: false,
  products: [],
  status: "add",
  updatingProduct: {
    id: "",
    title: "",
    describtion: "",
    price: 0,
    category: "",
    thumbnail: "",
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeProductStatus: (state, action) => {
      state.status = action.payload;
    },
    changeUpdatingProduct: (state, action) => {
      state.updatingProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, data) => {
      state.products = data.payload;
    }),
      builder.addCase(filterByCategory.fulfilled, (state, data) => {
        state.products = data.payload;
      });
    builder.addCase(addProduct.fulfilled, (state, data) => {
      state.products.push(data.payload);
      alert("product is added");
    });
    builder.addCase(deleteProduct.fulfilled, (state, data) => {
      const index = state.products.findIndex(
        (prod) => prod.id == data.payload.id
      );
      state.products.splice(index, 1);
      alert("product is deleted");
    });
    builder.addCase(updateProduct.pending, (state, data) => {
      state.status = "add";
    });
    builder.addCase(updateProduct.fulfilled, (state, data) => {
      const index = state.products.findIndex(
        (prod) => prod.id == data.payload.id
      );
      // state.products[index] = data.payload;
      Object.keys(data.payload).forEach((key) => {
        const index = state.products.findIndex(
          (prod) => prod.id == state.updatingProduct.id
        );
        // console.log(state.products[0].id)
        state.products[index][key] = data.payload[key];
      })
      alert("product is updated");
    });
  },
});

export default productsSlice.reducer;
export const { changeProductStatus, changeUpdatingProduct } = productsSlice.actions;
