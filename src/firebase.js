import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9tQQsFqwS3A3fh5_RO29wghXcR-JKZ9E",
    authDomain: "clone-65e25.firebaseapp.com",
    projectId: "clone-65e25",
    storageBucket: "clone-65e25.appspot.com",
    messagingSenderId: "538096592229",
    appId: "1:538096592229:web:915ce11de411807098ed8c",
    measurementId: "G-MR47CKSHRX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export const firebaseAuth=firebaseApp.auth();
  export {db, auth};
  export const googleProvider = new firebase.auth.GoogleAuthProvider();