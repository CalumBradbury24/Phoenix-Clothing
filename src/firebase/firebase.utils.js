import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//firebase uses noSQL so no schema is required
const config = {
  apiKey: "AIzaSyBXR-c5Hyz2sN9DB5kwfMiV41XK_u5860k",
  authDomain: "phoenix-clothing-9cb71.firebaseapp.com",
  databaseURL: "https://phoenix-clothing-9cb71.firebaseio.com",
  projectId: "phoenix-clothing-9cb71",
  storageBucket: "phoenix-clothing-9cb71.appspot.com",
  messagingSenderId: "638922898690",
  appId: "1:638922898690:web:83e191b0d2863fbd02961b",
  measurementId: "G-7KCSN5G5GT",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    //If user auth object doesn't exist
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    //Check if any data exists in this place
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        //if doesn't exist put new data in database using this object
        displayName,
        email,
        createdAt,
        ...additionalData, //spread in any other additional data
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collectionsSnapshot => {
  const transformedCollection = collectionsSnapshot.docs.map((docSnapshot) => {
    const { title, items } = docSnapshot.data(); //.data method gets the properties from snapshot

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapshot.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google authentication utility
export const googleProvider = new firebase.auth.GoogleAuthProvider(); //Gives access to GoogleAuth class from authentication library
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
