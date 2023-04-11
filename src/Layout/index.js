import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { restoreUserFromStorage } from "@/rtk/app-slices/userSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function LayOut({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(restoreUserFromStorage());
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <div className="pt-16">{children}</div>
      <Footer />
    </div>
  );
}
