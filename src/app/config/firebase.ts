// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "social-event-platform.firebaseapp.com",
  projectId: "social-event-platform",
  storageBucket: "social-event-platform.appspot.com",
  messagingSenderId: "357777713302",
  appId: "1:357777713302:web:ab80043b73aeec0948fab7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);