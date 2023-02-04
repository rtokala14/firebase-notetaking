// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDox3jMOlBsz4YQ9Ytg8sdRUiTXzuqnnFI",
  authDomain: "notetaking-8704e.firebaseapp.com",
  projectId: "notetaking-8704e",
  storageBucket: "notetaking-8704e.appspot.com",
  messagingSenderId: "450929767755",
  appId: "1:450929767755:web:e8bdb5aaa25d0c3396e4ce",
  measurementId: "G-EMSS9Z68KY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
