import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCptGiZ70JyCxIN-271BKruSIiVJJ0aJTQ",
  authDomain: "first-react-db-cd9e8.firebaseapp.com",
  projectId: "first-react-db-cd9e8",
  storageBucket: "first-react-db-cd9e8.appspot.com",
  messagingSenderId: "348644743199",
  appId: "1:348644743199:web:2a774fc79f9f61685b9d2a",
  measurementId: "G-SCRF17FM40",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogleMethod = () => auth.signInWithPopup(provider);
