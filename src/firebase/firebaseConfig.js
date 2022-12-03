// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCmuMg90Wirif8uJYoyOrxovkkZGMKdFDY',
  authDomain: 'app-animales-1fefe.firebaseapp.com',
  databaseURL: 'https://app-animales-1fefe-default-rtdb.firebaseio.com',
  projectId: 'app-animales-1fefe',
  storageBucket: 'app-animales-1fefe.appspot.com',
  messagingSenderId: '869944335469',
  appId: '1:869944335469:web:6f44531f28eaf3c3607364',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
