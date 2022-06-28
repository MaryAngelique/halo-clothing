// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
  } from "firebase/auth";

  
const firebaseConfig = {
  apiKey: "AIzaSyARMGyTK5QEE92R99Trw5uNv4GyOxsr6XQ",
  authDomain: "halo-clothing-db-87ae7.firebaseapp.com",
  projectId: "halo-clothing-db-87ae7",
  storageBucket: "halo-clothing-db-87ae7.appspot.com",
  messagingSenderId: "263150886519",
  appId: "1:263150886519:web:1f4a88ab01c04beeef7072"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);