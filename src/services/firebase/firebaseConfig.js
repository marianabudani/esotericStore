// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHqNWcEHcsx8llcFaLXdpZU1JmrVs6wRE",
  authDomain: "esoteric-store.firebaseapp.com",
  projectId: "esoteric-store",
  storageBucket: "esoteric-store.appspot.com",
  messagingSenderId: "1072594727349",
  appId: "1:1072594727349:web:6b632b5bcaf6e3fc0f29fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportar la instancia de Firestore
export const db = getFirestore(app);