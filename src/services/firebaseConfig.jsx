// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getFirestore} from 'firebase/firestore'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBLtuliEkAqGXSe5RoZUFj1hJSkMI9U-CQ",
//   authDomain: "ai-trip-planner-b16ba.firebaseapp.com",
//   projectId: "ai-trip-planner-b16ba",
//   storageBucket: "ai-trip-planner-b16ba.appspot.com",
//   messagingSenderId: "654419959827",
//   appId: "1:654419959827:web:ab457688f1e234fe0f1fe6",
//   measurementId: "G-DS3935ZN33"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXz002XcBybuf_1uVt53uAWTfSZviEgu4",
  authDomain: "ai-trip-planner-1d0b9.firebaseapp.com",
  projectId: "ai-trip-planner-1d0b9",
  storageBucket: "ai-trip-planner-1d0b9.firebasestorage.app",
  messagingSenderId: "967372083267",
  appId: "1:967372083267:web:818f3f1cf9206982cc44f6",
  measurementId: "G-2HE21LZ7SJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);