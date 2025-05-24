// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvBv0eXOrRBvetanNicferZH-06sKwtYM",
  authDomain: "roommate-client-side.firebaseapp.com",
  projectId: "roommate-client-side",
  storageBucket: "roommate-client-side.firebasestorage.app",
  messagingSenderId: "587367076388",
  appId: "1:587367076388:web:b1e5154e563261c16b7eb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);