// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-vf7Xr1BfcKK_RJ08ZrZRUger4OSpyxc",
  authDomain: "react1-10b19.firebaseapp.com",
  projectId: "react1-10b19",
  storageBucket: "react1-10b19.appspot.com",
  messagingSenderId: "162014175025",
  appId: "1:162014175025:web:c02d20d5c62b8c7e9f9a10",
  measurementId: "G-7DHRXDGML2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export  const db = getFirestore(app);