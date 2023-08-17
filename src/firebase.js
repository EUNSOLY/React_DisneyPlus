// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDUv_RAQLwrsW14vIC3KPe_ZJlYpnKK5A",
  authDomain: "react-disney-plus-app-ab04b.firebaseapp.com",
  projectId: "react-disney-plus-app-ab04b",
  storageBucket: "react-disney-plus-app-ab04b.appspot.com",
  messagingSenderId: "939220681868",
  appId: "1:939220681868:web:c3479fa7fb20a880dfe7a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
