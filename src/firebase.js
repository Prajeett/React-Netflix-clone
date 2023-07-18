import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDMr3cwcQO9TMTgRJTXNacesI8zcGUi4Zs",
    authDomain: "netflix-clone-b536f.firebaseapp.com",
    projectId: "netflix-clone-b536f",
    storageBucket: "netflix-clone-b536f.appspot.com",
    messagingSenderId: "51722615503",
    appId: "1:51722615503:web:7d8e2656c49565792955ba"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


  export const auth = getAuth(app);
  export default db;