// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRlrvMfp4slWtnQRSdAVHZcA2VYCiHXx0",
  authDomain: "jinsbang-app.firebaseapp.com",
  projectId: "jinsbang-app",
  storageBucket: "jinsbang-app.firebasestorage.app",
  messagingSenderId: "494329949849",
  appId: "1:494329949849:web:2ec3abdd10c232de84d208",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
