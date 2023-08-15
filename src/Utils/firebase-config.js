import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbyGarntPi-dH-4CuSDGNQlzVQqLb63Ww",
  authDomain: "cristian-manolescu-cv.firebaseapp.com",
  projectId: "cristian-manolescu-cv",
  storageBucket: "cristian-manolescu-cv.appspot.com",
  messagingSenderId: "658612004696",
  appId: "1:658612004696:web:22e1704bbf4ced8976672d",
  measurementId: "G-NHGXFKXT6V",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
