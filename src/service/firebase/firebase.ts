// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqsYBX8rB73DSGSRdJMtOaJS_VT-tijSw",
  authDomain: "glampire-ai.firebaseapp.com",
  projectId: "glampire-ai",
  storageBucket: "glampire-ai.appspot.com",
  messagingSenderId: "869367722313",
  appId: "1:869367722313:web:eeaf20e0fccfd1ab16aa98",
  measurementId: "G-PM5NZ2QQZW"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
