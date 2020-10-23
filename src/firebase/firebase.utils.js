import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDizAuR1-zgQIXeZbIgdgeW7bHQZrryK6o",
  authDomain: "cloth-db-f90d1.firebaseapp.com",
  databaseURL: "https://cloth-db-f90d1.firebaseio.com",
  projectId: "cloth-db-f90d1",
  storageBucket: "cloth-db-f90d1.appspot.com",
  messagingSenderId: "365835451503",
  appId: "1:365835451503:web:92523baf21fb010b7d619a",
  measurementId: "G-LZYVEDRTZD",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
