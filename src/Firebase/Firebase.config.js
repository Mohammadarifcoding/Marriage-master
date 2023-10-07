// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfByMHKTA_z2dY7qeW3mKtv78oqwFn5dM",
  authDomain: "marriage-master-a2518.firebaseapp.com",
  projectId: "marriage-master-a2518",
  storageBucket: "marriage-master-a2518.appspot.com",
  messagingSenderId: "481385923891",
  appId: "1:481385923891:web:11556260f6eef14134ea46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth