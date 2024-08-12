// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGXisgCUrx60PzbqzRpPQxx96EMGzi144",
  authDomain: "panikasosweb.firebaseapp.com",
  projectId: "panikasosweb",
  storageBucket: "panikasosweb.appspot.com",
  messagingSenderId: "632724481511",
  appId: "1:632724481511:web:23e984f8d913d92cb6c942",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
