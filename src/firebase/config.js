import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzhQrf0h8Eh_HnFuMaBdk9hVNZfRGvMtc",
  authDomain: "proyectoreact-d665f.firebaseapp.com",
  projectId: "proyectoreact-d665f",
  storageBucket: "proyectoreact-d665f.firebasestorage.app",
  messagingSenderId: "141243009236",
  appId: "1:141243009236:web:ccfbc7fb68272962cc5341"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
