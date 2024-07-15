// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhhxhvXV1yLfY5lHq24E4ACSUR9PwS4C8",
  authDomain: "myfirstapp-487d3.firebaseapp.com",
  projectId: "myfirstapp-487d3",
  storageBucket: "myfirstapp-487d3.appspot.com",
  messagingSenderId: "326396405515",
  appId: "1:326396405515:web:bb6946ba85178871d6e40e"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}





