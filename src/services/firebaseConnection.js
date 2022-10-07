// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';


const firebaseConfig = {
  apiKey: "AIzaSyD6EbsIb9yTQEkg8WlEyJqRuOPXZ4MZsMs",
  authDomain: "financasapp-76b0a.firebaseapp.com",
  projectId: "financasapp-76b0a",
  storageBucket: "financasapp-76b0a.appspot.com",
  messagingSenderId: "391503490264",
  appId: "1:391503490264:web:a859a0f64700f27d07fbad",
  measurementId: "G-E1XSREYSVZ",
  databaseURL: "https://financasapp-76b0a-default-rtdb.firebaseio.com"
};

let app;

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

export default firebase;