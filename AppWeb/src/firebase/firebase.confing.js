// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCIV499woR85yWg5A2gyBzjYdVjRzoidZw",
  authDomain: "peliculas-92484.firebaseapp.com",
  projectId: "peliculas-92484",
  storageBucket: "peliculas-92484.appspot.com",
  messagingSenderId: "152830185862",
  appId: "1:152830185862:web:9283fe2c3bd962b73a1c07",
  measurementId: "G-YJ035CBV8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
