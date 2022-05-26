import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyBSEFmQ6iOtjStkawyPr5arm0EOQHFbrQ4",
  authDomain: "linkedin-2-48885.firebaseapp.com",
  projectId: "linkedin-2-48885",
  storageBucket: "linkedin-2-48885.appspot.com",
  messagingSenderId: "633374744801",
  appId: "1:633374744801:web:23ec66e055a974688417a0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
