import Image from "next/image";
import React from "react";
import bannerImg from "public/images/banner-img.png";
import Link from "next/link";

export default function Header() {
  return (
    <section className="bg-gradient-to-r from-first-main to-second-main">
      <div className="container py-8 flex flex-col-reverse sm:flex-row justify-evenly sm:justify-between items-center gap-8 sm:gap-0 sm:h-[calc(100vh-64px)]">
        <div className="text-white w-full sm:w-1/2 flex flex-col items-center justify-between gap-6">
          <h2 className="uppercsae text-[32px] sm:text-[55px] md:text-6xl lg:text-[65] font-bold uppercase ">
            sales
          </h2>
          <p className="font-medium capitalize text-sm sm:text-[15px] md:text-base leading-6 md:!leading-7 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            minus placeat necessitatibus consequatur repudiandae magni
            reprehenderit iusto.
          </p>
          <div className="flex justify-center items-center gap-5">
            <Link href="/login" className="banner-btn">login</Link>
            <Link href="/signup" className="banner-btn">sign up</Link>
          </div>
        </div>
        <Image
          src={bannerImg}
          alt="banner"
          className="lg:h-[93%] xl:h-full w-[200px] sm:w-[300px] md:w-[370px] lg:w-[465px] xl:w-[500px] mx-auto sm:ml-auto"
        />
      </div>
    </section>
  );
}
