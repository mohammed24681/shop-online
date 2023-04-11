import {
  changeProductStatus,
  changeUpdatingProduct,
  deleteProduct,
  fetchProducts,
} from "@/rtk/app-slices/productsSlice";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Table() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const products = useSelector((state) => state.products.products);
  return (
    <div>
      {products.length > 0 && (
        <table className="products-table">
          <thead>
            <tr className="bg-first-main text-white">
              <th>image</th>
              <th>title</th>
              <th>describtion</th>
              <th>price</th>
              <th>category</th>
              <th>manage</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => {
              return (
                <tr key={prod.id}>
                  <td className="w-24">
                    <Image
                      src={prod.thumbnail}
                      alt="test"
                      width="50"
                      height="50"
                      className="mx-auto"
                    />
                  </td>
                  <td>{prod.title}</td>
                  <td>{prod.describtion}</td>
                  <td>{prod.price}</td>
                  <td>{prod.category}</td>
                  <td>
                    <button
                      onClick={() => {
                        dispatch(deleteProduct(prod.id));
                      }}
                    >
                      delete
                    </button>
                    <button
                      onClick={() => {
                        dispatch(changeProductStatus("update"));
                        dispatch(changeUpdatingProduct(prod));
                      }}
                    >
                      edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
