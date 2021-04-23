import firebase from 'firebase'

const  firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyCFnEukYBqyiua3bbYHWFLK7FNC3NOf7yU",
    authDomain: "clone-e02a1.firebaseapp.com",
    projectId: "clone-e02a1",
    storageBucket: "clone-e02a1.appspot.com",
    messagingSenderId: "42712668554",
    appId: "1:42712668554:web:175caf1f533722a2799073",
    
  });
  // Initialize Firebase

//   const db = firebaseApp.firestore()
  const auth = firebase.auth()
  

  export { auth, firebaseApp}