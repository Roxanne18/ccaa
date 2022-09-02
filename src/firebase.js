import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBg2ChsScaxxbw3FRdHxP6F7p8R6_tj4B8",
    authDomain: "ccaa-8dcb0.firebaseapp.com",
    projectId: "ccaa-8dcb0",
    storageBucket: "ccaa-8dcb0.appspot.com",
    messagingSenderId: "371278922397",
    appId: "1:371278922397:web:1630970b25bae0321e4a74",
    measurementId: "G-56NMHJN9TM"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}