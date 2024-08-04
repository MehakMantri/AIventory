import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDUPuhLjZpzwIz_3hQB2dZMK1AhAoYr7zk",
    authDomain: "inventory-management-5a5c2.firebaseapp.com",
    projectId: "inventory-management-5a5c2",
    storageBucket: "inventory-management-5a5c2.appspot.com",
    messagingSenderId: "338694804597",
    appId: "1:338694804597:web:c8d6259cd9ad646b2f543c",
    measurementId: "G-TZYJ6GCKLS"
  };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };