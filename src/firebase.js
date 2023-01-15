// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCbWFLSG11899gaNl7ys8jk5UjlwtX0eAM",
  authDomain: "react-movie-app-45151.firebaseapp.com",
  projectId: "react-movie-app-45151",
  storageBucket: "react-movie-app-45151.appspot.com",
  messagingSenderId: "198321637449",
  appId: "1:198321637449:web:4dfd4ca618d78b1ed3d798",
  measurementId: "G-6VC72ZNL65"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export default { app, auth };