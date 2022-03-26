import firebase from 'firebase';
require("@firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyDm5Rwrc5npFXaYQcWhi1izpRnmmfRkyrw",
    authDomain: "e-library-c90c9.firebaseapp.com",
    projectId: "e-library-c90c9",
    storageBucket: "e-library-c90c9.appspot.com",
    messagingSenderId: "426267956173",
    appId: "1:426267956173:web:b8b30ccaa785cbe2d46a84"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();