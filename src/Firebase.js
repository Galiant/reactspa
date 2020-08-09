import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBAoVw-fJS5w5vRJoLxx-6X2MBbFe5jRA",
  authDomain: "react-spa-7aedd.firebaseapp.com",
  databaseURL: "https://react-spa-7aedd.firebaseio.com",
  projectId: "react-spa-7aedd",
  storageBucket: "react-spa-7aedd.appspot.com",
  messagingSenderId: "695932645196",
  appId: "1:695932645196:web:8143c99f183e487a24a9e9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
