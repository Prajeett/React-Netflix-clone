import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDMr3cwcQO9TMTgRJTXNacesI8zcGUi4Zs",
    authDomain: "netflix-clone-b536f.firebaseapp.com",
    projectId: "netflix-clone-b536f",
    storageBucket: "netflix-clone-b536f.appspot.com",
    messagingSenderId: "51722615503",
    appId: "1:51722615503:web:7d8e2656c49565792955ba"
  };

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
  const db = firebaseApp.firestore();

export {auth};
  export default db;