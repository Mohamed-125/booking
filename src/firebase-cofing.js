// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

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

export const registerUser = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    switch (err.message) {
      case "Firebase: Error (auth/email-already-in-use).":
        alert("email already in use");
        break;
      case "Firebase: Password should be at least 6 characters (auth/weak-password)":
        alert("Password should be at least 6 characters");
        break;

      default:
        break;
    }
    console.log(err.message);
  }
};
export const login = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    switch (err.message) {
      case "Firebase: Error (auth/wrong-password).":
        alert("wrong password");
        break;
      case "Firebase: Error (auth/user-not-found).":
        alert("There is not account with this email");
        break;

      default:
        break;
    }
    console.log(err.message);
  }
};
export const logout = async () => {
  signOut(auth);
};
