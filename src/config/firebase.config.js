import {initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCg2Z0DkLT2lJu5B7qzTyZXVnEHB_j6l3w",
    authDomain: "tradeace003.firebaseapp.com",
    projectId: "tradeace003",
    storageBucket: "tradeace003.appspot.com",
    messagingSenderId: "543807611900",
    appId: "1:543807611900:web:66003bde85ea525f950879"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
export {app, auth, db};