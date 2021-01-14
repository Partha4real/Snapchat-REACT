import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBQHeFMz6soBurrMDNGn5dgoLPrCayUsJQ",
    authDomain: "snapchat-clone-80bd0.firebaseapp.com",
    projectId: "snapchat-clone-80bd0",
    storageBucket: "snapchat-clone-80bd0.appspot.com",
    messagingSenderId: "468573300122",
    appId: "1:468573300122:web:4595e2ee2688772e6dc623"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); // accessing database in db variable
const auth = firebase.auth();
const storage = firebase.storage(); // allows to upload stuff
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, storage, provider};


