// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfkME1MQtGbO3NZa1f83bVCy9y5DRFoSE",
    authDomain: "asmr-web.firebaseapp.com",
    projectId: "asmr-web",
    storageBucket: "asmr-web.appspot.com",
    messagingSenderId: "149479272551",
    appId: "1:149479272551:web:46130e84b679b0fa0524c2",
    measurementId: "G-H4TJ5MHPR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);