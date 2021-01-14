import firebase from 'firebase'
import auth from 'firebase/auth'
import database from 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyBzgNqvPlOnzbSfKwZJSa97u4nZBky1U-I",
    authDomain: "chatapp-7f1d4.firebaseapp.com",
    databaseURL: "https://chatapp-7f1d4.firebaseio.com",
    projectId: "chatapp-7f1d4",
    storageBucket: "chatapp-7f1d4.appspot.com",
    messagingSenderId: "430767782381",
    appId: "1:430767782381:web:6ce72ec8e6a709a0228fe4",
    measurementId: "G-9C744D1TTJ"
  };
let Firebase =  firebase.initializeApp(firebaseConfig);

export default Firebase


