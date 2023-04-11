import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useRouter } from "next/router";
import swal from "sweetalert";
import Swal from "sweetalert2";

export const signUp = createAsyncThunk("user/signup", (userData) => {
  const data = axios
    .post("https://shop-online-sable.vercel.app/api/users", userData)
    .then((res) => {
      return res.data;
    });
  return data;
});

export const login = createAsyncThunk("user/login", ({ email, password }) => {
  const data = axios
    .get(`https://shop-online-sable.vercel.app/api/users/${email}/${password}`)
    .then((res) => {
      return res.data;
    });
  return data;
});

export const restoreUserFromStorage = createAsyncThunk(
  "user/restore",
  (_, { getState, rejectWithValue }) => {
    const userId = JSON.parse(sessionStorage.getItem("userId"));
    if (!getState().user.loggedIn && userId !== null) {
      const data = axios
        .get(`https://shop-online-sable.vercel.app/api/users/id/${userId}`)
        .then((res) => {
          return res.data;
        });
      return data;
    } else {
      return rejectWithValue("not found");
    }
  }
);

const initialState = {
  loggedIn: false,
  currentUserData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      sessionStorage.removeItem("userId");
      state.loggedIn = false;
      state.currentUserData = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload === "not found") {
        Swal.fire("wrong email or password !", "", "error");
      } else {
        if (action.payload.loggedIn === true) {
          Swal.fire({
            icon: "error",
            title: "this user is logged in actually",
          });
        } else {
          state.currentUserData = action.payload;
          state.currentUserData.loggedIn = true;
          state.loggedIn = true;
          sessionStorage.setItem("userId", JSON.stringify(action.payload.id));
          Swal.fire({
            timer: 1000,
            title: "Logged In Succefully !",
            icon: "success",
            allowEnterKey: false,
            showCloseButton: true,
            showConfirmButton: false,
            text: `Hello ${state.currentUserData.password}`,
          });
          axios.patch(
            `https://shop-online-sable.vercel.app/api/users/id/${state.currentUserData.id}`,
            state.currentUserData
          );
        }
      }
    });
    builder.addCase(restoreUserFromStorage.fulfilled, (state, action) => {
      state.currentUserData = action.payload;
      state.loggedIn = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      if (action.payload == "found user") {
        Swal.fire("this user has been found", "", "error");
      } else {
        Swal.fire("signed up seccessfully", "login to your account", "success");
      }
    });
  },
});

export default userSlice.reducer;
export const { logOut } = userSlice.actions;
