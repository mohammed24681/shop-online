import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { fetchProducts } from "@/rtk/app-slices/productsSlice";

export default function Products() {
  let products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="products" id="products">
      {products.map((prod) => {
        return (
          <Product
            key={prod.id}
            id={prod.id}
            imgUrl={prod.thumbnail}
            title={prod.title}
            price={prod.price}
          />
        );
      })}
    </div>
  );
}
