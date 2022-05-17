// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUa6dmUfkRZ_jpdcTC0jXdu5-U2YL82SE",
  authDomain: "clean-ca-co.firebaseapp.com",
  projectId: "clean-ca-co",
  storageBucket: "clean-ca-co.appspot.com",
  messagingSenderId: "647316865831",
  appId: "1:647316865831:web:0703d9e8d81276e5b09f02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;