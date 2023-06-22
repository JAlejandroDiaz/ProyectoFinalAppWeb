// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCIV499woR85yWg5A2gyBzjYdVjRzoidZw",
  authDomain: "peliculas-92484.firebaseapp.com",
  projectId: "peliculas-92484",
  storageBucket: "peliculas-92484.appspot.com",
  messagingSenderId: "152830185862",
  appId: "1:152830185862:web:9283fe2c3bd962b73a1c07",
  measurementId: "G-YJ035CBV8K"
};
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 const auth = getAuth(app)
 const firestore  = getFirestore(app);
 const db = firebase.firestore();

export {app, auth, firestore, db }