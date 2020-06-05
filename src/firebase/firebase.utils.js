import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBXR-c5Hyz2sN9DB5kwfMiV41XK_u5860k",
    authDomain: "phoenix-clothing-9cb71.firebaseapp.com",
    databaseURL: "https://phoenix-clothing-9cb71.firebaseio.com",
    projectId: "phoenix-clothing-9cb71",
    storageBucket: "phoenix-clothing-9cb71.appspot.com",
    messagingSenderId: "638922898690",
    appId: "1:638922898690:web:83e191b0d2863fbd02961b",
    measurementId: "G-7KCSN5G5GT"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

//Google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();//Gives access to GoogleAuth class from authentication library
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;