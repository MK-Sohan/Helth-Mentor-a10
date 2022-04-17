// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxeHu-XPm3JqiZ4TdCIAbxhIIdoPt5_R4",
  authDomain: "assignment-10-b5a0b.firebaseapp.com",
  projectId: "assignment-10-b5a0b",
  storageBucket: "assignment-10-b5a0b.appspot.com",
  messagingSenderId: "147684872612",
  appId: "1:147684872612:web:02bc670e0bb9c59759f131",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
