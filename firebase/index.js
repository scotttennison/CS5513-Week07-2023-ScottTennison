import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// replace this firebase conFigvariable with your own
const firebaseConfig = {
  apiKey: "AIzaSyBRj98idOGnBarAloTFcOxtHWxTXa303KU",
  authDomain: "cs5513-wk07a8tennison.firebaseapp.com",
  projectId: "cs5513-wk07a8tennison",
  storageBucket: "cs5513-wk07a8tennison.appspot.com",
  messagingSenderId: "274239793644",
  appId: "1:274239793644:web:2e38f0daffb01c9e5db8c9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };