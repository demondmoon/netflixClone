
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const config = {
  apiKey: "AIzaSyDSTP9ulOB3Jjt8LPzHbYX3FKMpJ9BmBYo",
  authDomain: "netflix-scrimba-b1d2e.firebaseapp.com",
  databaseURL:"https://netflix-scrimba-b1d2e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflix-scrimba-b1d2e",
  storageBucket: "netflix-scrimba-b1d2e.appspot.com",
  messagingSenderId: "310640509457",
  addId: "1:310640509457:web:fe5015f8415fd20342a7b0",
};



firebase.initializeApp(config);
const auth = firebase.auth()
const db = firebase.firestore()

export {auth, db}
