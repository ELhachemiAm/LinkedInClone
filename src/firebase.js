import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtzJbLGTtjBBW0tPrMov1RNpzmZUnFlzY",
    authDomain: "linkedin-clone-904a5.firebaseapp.com",
    projectId: "linkedin-clone-904a5",
    storageBucket: "linkedin-clone-904a5.appspot.com",
    messagingSenderId: "171150099419",
    appId: "1:171150099419:web:1c8b0fd212013a47cf5dfe",
    measurementId: "G-CN4P30WDNN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};