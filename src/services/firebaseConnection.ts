import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDwDNJeqB7reGVPcTT1LIpiVyxJSR4spI",
  authDomain: "table-management-6e4e2.firebaseapp.com",
  projectId: "table-management-6e4e2",
  storageBucket: "table-management-6e4e2.appspot.com",
  messagingSenderId: "894925338582",
  appId: "1:894925338582:web:6348fc64f83c5b87ce1677",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
