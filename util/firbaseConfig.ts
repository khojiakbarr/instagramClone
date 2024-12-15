import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCN-eNFoK-b5055RHiC0BEr2p-AGEaES98",
  authDomain: "homework-app-3cad7.firebaseapp.com",
  databaseURL: "https://homework-app-3cad7-default-rtdb.firebaseio.com",
  projectId: "homework-app-3cad7",
  storageBucket: "homework-app-3cad7.appspot.com",
  messagingSenderId: "579885565243",
  appId: "1:579885565243:web:25c0bacb5340cf8fd3e31e",
  measurementId: "G-G7D0L5FZJ4"
};


const app = initializeApp(firebaseConfig);

export default app;
