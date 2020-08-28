import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCvZPmRktNXkcLSlvb227g8ILBuVW_o2j8",
  authDomain: "stillevents-b3ff5.firebaseapp.com",
  databaseURL: "https://stillevents-b3ff5.firebaseio.com",
  projectId: "stillevents-b3ff5",
  storageBucket: "stillevents-b3ff5.appspot.com",
  messagingSenderId: "197250975536",
  appId: "1:197250975536:web:19b905b4fcecb469956af5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
