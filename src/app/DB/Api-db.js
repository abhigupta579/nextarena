// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDqG_uPiymsvEeDcbG-tc3tpLpHBzBiI10",
  authDomain: "nextarena-c2198.firebaseapp.com",
  databaseURL: "https://nextarena-c2198-default-rtdb.firebaseio.com",
  projectId: "nextarena-c2198",
  storageBucket: "nextarena-c2198.appspot.com",
  messagingSenderId: "669937906806",
  appId: "1:669937906806:web:662a9000134698675cdb57",
  measurementId: "G-TJ296WMMJZ",
  databaseURL: 'https://console.firebase.google.com/project/nextarena-c2198/database/nextarena-c2198-default-rtdb/data/~2F'
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {db,app};