import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

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

const app = initializeApp(firebaseConfig);

// Auth Stuff

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const signInWithGooglePopup = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
  } catch (error) {
    console.log(error);
  }
};

const signInWithGithubPopup = async () => {
  try {
    const res = await signInWithPopup(auth, githubProvider);
    const user = res.user;
  } catch (error) {
    console.log(error);
  }
};

const signInWithTwitterPopup = async () => {
  try {
    const res = await signInWithPopup(auth, twitterProvider);
    const user = res.user;
  } catch (error) {
    console.log(error);
  }
};

const logout = () => {
  signOut(auth);
};

// Firestore Stuff

const db = getFirestore(app);

export {
  auth,
  signInWithGooglePopup,
  logout,
  signInWithGithubPopup,
  signInWithTwitterPopup,
  db,
  app,
};
