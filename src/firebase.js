import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: AIzaSyAamVgjrCD3t0NKbCo6UuaaBJoodHYYMYI.REACT_APP_FIREBASE_KEY,
  authDomain: "staychat-spacevise.firebaseapp.com",
  projectId: "staychat-spacevise",
  storageBucket: "staychat-spacevise.appspot.com",
  messagingSenderId: "408663109744",
  appId: "1:408663109744:web:2d81690bfc8b244d6984b5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()