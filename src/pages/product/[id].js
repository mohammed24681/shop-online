import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";

import { FaShoppingCart, FaPinterest } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { useRouter } from "next/router";
import axios from "axios";
import { addProductToCart } from "@/rtk/app-slices/cartSlice";
import { useDispatch } from "react-redux";

export default function Product() {
  const dispatch = useDispatch()
  let [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const router = useRouter();
  const productId = router.query.id;

  useEffect(() => {
    axios.get(`http://localhost:3000/api/products/${productId}`).then((res) => {
      setProduct(res.data);
    });
  }, [productId]);

  return (
    <>
      <Head>
        <title>Product Details</title>
      </Head>
      {product && (
        <div className="container py-12 flex justify-between gap-8">
          <div className="bg-black/5 md:w-[51vw] xl:w-[50vw] h-[37vw] center-children">
            {product.thumbnail && (
              <Image
                src={product.thumbnail}
                alt="testImg"
                className="w-[60%]"
                width={200}
                height={100}
              />
            )}
          </div>
          <div className=" md:w-[39vw] lg:w-[42vw] xl:w-[43vw] font-medium capitalize">
            <h3 className="text-2xl">{product.title}</h3>
            <p className="text-[28px] my-4">$ {product.price}</p>
            <p className="text-text text-15px">{product.describtion}</p>
            <div className="flex gap-4 my-8">
              <div className="font-normal border-2 border-black/20 flex divide-x-2 divide-black/20">
                <button
                  className="center-children w-9 text-[22px] leading-8 hover:bg-first-main hover:text-white transition"
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(--quantity);
                    }
                  }}
                >
                  -
                </button>
                <span className="center-children w-16 leading-8">
                  {quantity}
                </span>
                <button
                  className="center-children w-9 text-sm leading-8 hover:bg-first-main hover:text-white transition"
                  onClick={() => {
                    setQuantity(++quantity);
                  }}
                >
                  +
                </button>
              </div>
              <button
                className="uppercase flex gap-2 bg-first-main hover:bg-purple-800 text-white text-sm h-11 px-6 center-children transition"
                onClick={() => {
                  dispatch(addProductToCart({ product, quantity }))
                }}
              >
                <FaShoppingCart />
                add to cart
              </button>
            </div>
            <hr className="bg-black/20 h-[1px] w-3/4 mx-auto" />
            <div className="other-details text-text">
              <p className="pt-6 pb-2">
                <span className="text-black pr-1">category :</span>
                electronics
              </p>
              <p className="flex">
                <span className="text-black pr-1">share :</span>
                <span className="flex gap-1 items-center text-xl">
                  <GrFacebookOption />
                  <AiOutlineTwitter />
                  <TiSocialLinkedin />
                  <FaPinterest />
                  <AiOutlineInstagram />
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
