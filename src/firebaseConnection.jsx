import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBywz6m5XGQmYWWNuSCpCqAJmOKnzu5MBc",
    authDomain: "projeto-urna-66db4.firebaseapp.com",
    projectId: "projeto-urna-66db4",
    storageBucket: "projeto-urna-66db4.appspot.com",
    messagingSenderId: "331657752440",
    appId: "1:331657752440:web:ef758b075e381efd7a228d",
    measurementId: "G-FER2V3QBXB"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)
export { db, auth };