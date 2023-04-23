import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "let-s-meet-a913f.firebaseapp.com",
  projectId: "let-s-meet-a913f",
  storageBucket: "let-s-meet-a913f.appspot.com",
  messagingSenderId: "381617042890",
  appId: "1:381617042890:web:5da9a57081fab291930b33",
  measurementId: "G-G23TXTWC5S"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
