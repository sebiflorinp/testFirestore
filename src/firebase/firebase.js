// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwB3YbVF8WrJhKDEC_9e4Xdm39qk5Uvlw",
  authDomain: "testreact-9d0a3.firebaseapp.com",
  projectId: "testreact-9d0a3",
  storageBucket: "testreact-9d0a3.appspot.com",
  messagingSenderId: "706687937535",
  appId: "1:706687937535:web:33d75eecccc5a0fc5555ca",
  measurementId: "G-FTC5SJVQK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore()