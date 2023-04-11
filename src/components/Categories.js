import React from "react";
import category1 from "public/images/cat-1.jpg";
import category2 from "public/images/cat-2.jpg";
import category3 from "public/images/cat-3.jpg";
import category4 from "public/images/cat-4.jpg";
import Image from "next/image";
import { filterByCategory } from "@/rtk/app-slices/productsSlice";
import { useDispatch } from "react-redux";

export default function Categories() {
  const dispatch = useDispatch()
  return (
    <div className="categories">
      <div onClick={(e) => dispatch(filterByCategory(e.currentTarget.id)) } id="headphones">
        <Image src={category1} alt="category1" />
      </div>
      <div onClick={(e) => dispatch(filterByCategory(e.currentTarget.id)) } id="smart-watches">
        <Image src={category3} alt="category3" />
      </div>
      <div onClick={(e) => dispatch(filterByCategory(e.currentTarget.id)) } id="bluetooth-speakers">
        <Image src={category2} alt="category2" />
      </div>
      <div onClick={(e) => dispatch(filterByCategory(e.currentTarget.id)) } id="wireless-earpuds">
        <Image src={category4} alt="category4" />
      </div>
    </div>
  );
}
