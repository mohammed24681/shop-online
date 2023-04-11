import { signUp } from "@/rtk/app-slices/userSlice";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function SignUp() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(signUp({ email, password, loggedIn: false })).then((res) => {
      if (
        res.meta.requestStatus === "fulfilled" &&
        res.payload !== "found user"
      ) {
        router.push("/login");
      }
    });
  };
  return (
    <div className="sm:h-[calc(100vh-64px)] center-children">
      <Head>
        <title>sign up page</title>
      </Head>
      <form className="user-form">
        <h1>sign up an account</h1>
        <div>
          <label htmlFor="signup-email">enter your email</label>
          <input
            type="email"
            id="signup-email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="signup-password">enter your password</label>
          <input
            type="password"
            id="signup-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <input type="submit" value="submit" onClick={handleSignUp} />
      </form>
    </div>
  );
}

export default SignUp;
