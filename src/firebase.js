import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyL_9378kBV1nt5rL91NgQGxSjfIrk044",
  authDomain: "clone-5079b.firebaseapp.com",
  projectId: "clone-5079b",
  storageBucket: "clone-5079b.appspot.com",
  messagingSenderId: "969425698539",
  appId: "1:969425698539:web:31f5b04e4ddc9f6a8b48ae",
  measurementId: "G-ZEJLJG7C1P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
