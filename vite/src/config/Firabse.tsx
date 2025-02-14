import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyBQhKyeCMpycg5ywSuh3dcr8S4Rmoa5hW4",
  authDomain: "eweb-cb6f1.firebaseapp.com",
  projectId: "eweb-cb6f1",
  storageBucket: "eweb-cb6f1.firebasestorage.app",
  messagingSenderId: "1037860489355",
  appId: "1:1037860489355:web:adbca366229436f62bac8e",
  measurementId: "G-0RNHZMGHJH"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);

