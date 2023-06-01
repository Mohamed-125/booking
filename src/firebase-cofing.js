// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2s7IE9Z-a5Knj2ZlXGXquZeGk8ravN6M",
  authDomain: "booking-app-22ed4.firebaseapp.com",
  projectId: "booking-app-22ed4",
  storageBucket: "booking-app-22ed4.appspot.com",
  messagingSenderId: "342159057475",
  appId: "1:342159057475:web:7b7a6b40758bc55e94eaf6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const logout = async () => {
  signOut(auth);
};
