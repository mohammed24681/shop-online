import Image from "next/image";
import React from "react";
import testImg from "public/images/banner-img.png";

import { GrFacebookOption } from "react-icons/gr";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

export default function NewsLetter() {
  return (
    <div className="bg-[url('../../public/images/newletter.jpeg')] h-[400px] bg-center center-children">
      <div className="container text-center uppercase font-medium">
        <h3 className="text-text mb-2 font-bold">newsletter</h3>
        <p className="text-[27px] mb-5">
          sign up for latest updates and offers
        </p>
        <div className="flex justify-center mb-3">
          <input
            type="text"
            placeholder="email address"
            className="placeholder:capitalize placeholder:text-slate-400 outline-none border border-black/20 font-normal w-[340px] px-3.5 py-2.5 caret-first-main"
          />
          <button className="bg-first-main text-white capitalize px-7">
            subscribe
          </button>
        </div>
        <p className="capitalize text-text text-15px mb-4">
          will be used in accordance with our privacy policy
        </p>
        <ul className="new-letter-social">
          <li>
            <GrFacebookOption />
          </li>
          <li>
            <AiOutlineTwitter />
          </li>
          <li>
            <AiOutlineInstagram />
          </li>
          <li>
            <TiSocialLinkedin />
          </li>
        </ul>
      </div>
    </div>
  );
}
