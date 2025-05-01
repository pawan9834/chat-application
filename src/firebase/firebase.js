import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCy-2YwSmZP_gv-VZy3CwoGVZxHETKttuE",
    authDomain: "chat-application1110.firebaseapp.com",
    projectId: "chat-application1110",
    storageBucket: "chat-application1110.firebasestorage.app",
    messagingSenderId: "890229911816",
    appId: "1:890229911816:web:a86e03ba073d2c385d7cbd"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export {auth, db};