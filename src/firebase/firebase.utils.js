import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDkMhh-nRpl47Lupko6CIrOok4o_ETzik4",
    authDomain: "react-project-fcc34.firebaseapp.com",
    databaseURL: "https://react-project-fcc34-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-project-fcc34",
    storageBucket: "react-project-fcc34.appspot.com",
    messagingSenderId: "622386839124",
    appId: "1:622386839124:web:ffcaa262d1e6d34d3077c1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle=()=>auth.signInWithPopup(provider);