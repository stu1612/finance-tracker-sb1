// npm
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUNMsOWOL8Baz2ObHUZYn6pGwO1aWQlMU",
  authDomain: "finance-tracker-sb1.firebaseapp.com",
  projectId: "finance-tracker-sb1",
  storageBucket: "finance-tracker-sb1.appspot.com",
  messagingSenderId: "1073620217663",
  appId: "1:1073620217663:web:308b7660863e1075a52d8a",
};

const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);
const auth = getAuth(app);

const timestamp = fireStore.Timestamp;

export { fireStore, auth, timestamp };
