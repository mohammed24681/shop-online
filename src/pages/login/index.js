import { login } from "@/rtk/app-slices/userSlice";
import Head from "next/head";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  return (
    <div className="sm:h-[calc(100vh-64px)] center-children -mb-8">
      <Head>
        <title>login page</title>
      </Head>
      <form className="user-form">
        <h1>login to your account</h1>
        <div>
          <label htmlFor="login-email">enter your email</label>
          <input
            type="email"
            id="login-email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="login-password">enter your password</label>
          <input
            type="password"
            id="login-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <input type="submit" value="submit" onClick={handleLogin} />
      </form>
    </div>
  );
}

export default Login;
