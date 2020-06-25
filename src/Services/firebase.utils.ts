import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: 'lets-meet-6d520.firebaseapp.com',
  databaseURL: 'https://lets-meet-6d520.firebaseio.com',
  projectId: 'lets-meet-6d520',
  storageBucket: 'lets-meet-6d520.appspot.com',
  messagingSenderId: '675317729737',
  appId: '1:675317729737:web:f9850619e872283e7cc018',
  measurementId: 'G-M441SB8S3P'
};

export const createUserProfileDocument = async (userAuth: any, additionalData?: any) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();
    const list = JSON.stringify([]);

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        favourites: list,
        ...additionalData
      });
    } catch (e) {
      console.log('error creating user');
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

// google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);



export default firebase;