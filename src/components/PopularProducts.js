import React from "react";
import Products from "./Products";

export default function PopularProducts() {
  return (
    <div className="container">
      <h2 className="text-xl font-medium uppercase after:content-[''] w-fit after:w-2/5 after:h-[2px] after:bg-black relative after:absolute after:-bottom-2 after:left-0">
        popular products
      </h2>
      <Products />
    </div>
  );
}
