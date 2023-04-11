import { HiXMark } from "react-icons/hi2";
import Head from "next/head";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductFromCart,
  fetchCartProducts,
} from "@/rtk/app-slices/cartSlice";
import { useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartProducts());
  }, [dispatch]);
  const cartProducts = useSelector((state) => state.cart.products);
  return (
    <div className="container">
      <Head>
        <title>products cart</title>
      </Head>
      {cartProducts.length > 0 && (
        <table className="products-table">
          <thead>
            <tr className="bg-first-main text-white">
              <th></th>
              <th>image</th>
              <th>title</th>
              <th>price</th>
              <th>category</th>
              <th>quantity</th>
              <th>total</th>
              <th>buy</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((prod) => {
              return (
                <tr key={prod.product.id}>
                  <td>
                    <HiXMark
                      className="mx-auto h-6 w-6 hover:text-red-600 transition cursor-pointer"
                      onClick={() => {
                        dispatch(deleteProductFromCart(prod.product.id));
                      }}
                    />
                  </td>
                  <td className="w-24">
                    <Image
                      src={prod.product.thumbnail}
                      alt="product image"
                      width="50"
                      height="50"
                      className="mx-auto"
                    />
                  </td>
                  <td>{prod.product.title}</td>
                  <td>{prod.product.price}</td>
                  <td>{prod.product.category}</td>
                  <td>{prod.quantity}</td>
                  <td>
                    {Number(prod.quantity) * Number(prod.product.price)} $
                  </td>
                  <td>
                    <button>buy now</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
