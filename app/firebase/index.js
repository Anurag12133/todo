// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { get } from "http";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_cw8LP5B3Ln4UIm8-RX_OqpF_DBj79zY",
  authDomain: "todo-app-bf12e.firebaseapp.com",
  databaseURL: "https://todo-app-bf12e-default-rtdb.firebaseio.com",
  projectId: "todo-app-bf12e",
  storageBucket: "todo-app-bf12e.appspot.com",
  messagingSenderId: "208596732394",
  appId: "1:208596732394:web:dce37639ee88a03eb88a93",
  measurementId: "G-RGFZLNSGEB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
