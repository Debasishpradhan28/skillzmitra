import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA8xxhEKt526o2oxwAYgJQaicAMUe5NB8U",
  authDomain: "skill-82af2.firebaseapp.com",
  projectId: "skill-82af2",
  storageBucket: "skill-82af2.firebasestorage.app",
  messagingSenderId: "43136315307",
  appId: "1:43136315307:web:5e038acf287b73d4ce2cee"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // for saving user info