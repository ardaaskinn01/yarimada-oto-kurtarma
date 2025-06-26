// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqcU2yuKfwZEM7hHajweRHwheI-_spIWU",
  authDomain: "yarimada-d16e9.firebaseapp.com",
  projectId: "yarimada-d16e9",
  storageBucket: "yarimada-d16e9.firebasestorage.app",
  messagingSenderId: "359127763776",
  appId: "1:359127763776:web:ef71f85ad590aab42988a5",
  measurementId: "G-NSQ63Z7RG2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
