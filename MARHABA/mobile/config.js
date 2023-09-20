import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB_BsP19bCwbZPvzHiJnbg4V8BVt3jlMIA",
  authDomain: "tste-d88a0.firebaseapp.com",
  projectId: "tste-d88a0",
  storageBucket: "tste-d88a0.appspot.com",
  messagingSenderId: "644835309165",
  appId: "1:644835309165:web:af45029bf8a3e72e697164",
  measurementId: "G-7ZVYXSKLVY"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };