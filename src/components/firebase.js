import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzhZRWOUJspJNb9ZCXNB10a8ZPAz3Qdo8",
  authDomain: "clone-42332.firebaseapp.com",
  projectId: "clone-42332",
  storageBucket: "clone-42332.appspot.com",
  messagingSenderId: "922983874544",
  appId: "1:922983874544:web:2f8b31f89c77849dffa735",
  measurementId: "G-LNPVJXGFP0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
