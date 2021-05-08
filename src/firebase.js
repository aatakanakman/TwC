import firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB5-jEcEB4Vn6ax2-iNVO6rul27eH9sMQc",
    authDomain: "tw-clone-fe9d8.firebaseapp.com",
    projectId: "tw-clone-fe9d8",
    storageBucket: "tw-clone-fe9d8.appspot.com",
    messagingSenderId: "77637351390",
    appId: "1:77637351390:web:a3dca0eea4b3192a604f4f",
    measurementId: "G-GD9Q2ES38B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  const db = firebase.firestore();

  export default db;