// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNOoARrTcGO1-XEBW28LOygpVbxNO7-3M",
  authDomain: "netflix-clone-be6ef.firebaseapp.com",
  projectId: "netflix-clone-be6ef",
  storageBucket: "netflix-clone-be6ef.appspot.com",
  messagingSenderId: "774616952000",
  appId: "1:774616952000:web:e0eabdb4801b082092d125",
  measurementId: "G-7ZBLFB0V9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);