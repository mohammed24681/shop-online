import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBasketShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { BiUserCircle } from "react-icons/bi";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/rtk/app-slices/userSlice";

export default function NavBar() {
  const dispatch = useDispatch();
  const userLoggedIn = useSelector((state) => state.user.loggedIn);
  const cartProductsCount = useSelector((state) => state.cart.products).length;
  const barList = useRef();
  const handleBarList = () => {
    barList.current.classList.toggle("show-barlist");
  };
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        !e.target.parentElement?.classList.contains("show-barlist") &&
        e.target.id !== "bars" &&
        e.target.parentElement?.id !== "bars" &&
        e.target.parentElement?.parentElement?.id !== "bars" &&
        barList.current?.classList?.contains("show-barlist")
      ) {
        barList.current.classList.remove("show-barlist");
      }
    });
  }, []);
  return (
    <nav className="navbar">
      <div>
        <ul ref={barList}>
          <li>
            <Link href="/">home </Link>
          </li>
          <li>
            <Link href="/admin-dashboard">categories </Link>
          </li>
          <li>
            <Link href="/admin-dashboard">about</Link>
          </li>
        </ul>
        <h1 className="font-head text-2xl md:text-[26px]">shop online</h1>
        <ul>
          <li>
            <Link href="/">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
          </li>
          <li>
            <Link href="/">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </li>
          <li>
            <BiUserCircle className="text-[23px] relative" />
            <ul>
              {!userLoggedIn && (
                <li>
                  <Link href="/login">login</Link>
                </li>
              )}
              {!userLoggedIn && (
                <li>
                  <Link href="/signup">sign up</Link>
                </li>
              )}
              {userLoggedIn && (
                <li
                  onClick={() => {
                    dispatch(logOut());
                  }}
                >
                  <Link href="/">logout</Link>
                </li>
              )}
            </ul>
          </li>
          <li>
            <Link href="/cart">
              <span>{cartProductsCount}</span>
              <FontAwesomeIcon icon={faBasketShopping} />
            </Link>
          </li>
          <li className="md:hidden" id="bars" onClick={handleBarList}>
            <FontAwesomeIcon icon={faBars} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
