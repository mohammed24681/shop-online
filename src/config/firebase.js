import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA0PAuxmQlQg_OExBAc2-hndgeLryBgUVk",
  authDomain: "shop-online-6230c.firebaseapp.com",
  projectId: "shop-online-6230c",
  storageBucket: "shop-online-6230c.appspot.com",
  messagingSenderId: "457197405222",
  appId: "1:457197405222:web:2e47ca7b2671020ea6d2e7",
  measurementId: "G-ZDKKE61F77",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
