import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD4J96bw1pONOaqqeUx-7XqoLSC4JXpT9s",
  authDomain: "flipkart-clone-8a288.firebaseapp.com",
  databaseURL: "https://flipkart-clone-8a288.firebaseio.com",
  projectId: "flipkart-clone-8a288",
  storageBucket: "flipkart-clone-8a288.appspot.com",
  messagingSenderId: "115735340483",
  appId: "1:115735340483:web:81a4a90781b4c51e2c8976",
  measurementId: "G-GEE12CJRJD",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
