import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Product({ id, imgUrl, title, price }) {
  return (
      <Link href={`/product/${id}`}>
        <div>
          <Image src={imgUrl} alt="prod1" width={100} height={100} />
        </div>
        <div>
          <h3>{title}</h3>
          <p> $ {price}</p>
        </div>
      </Link>
  );
}
