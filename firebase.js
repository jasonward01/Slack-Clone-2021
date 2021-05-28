import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCfJwoOVf2X4kUxQTKUsoGVvLQjoJQFujg",
  authDomain: "slack-clone-8d051.firebaseapp.com",
  projectId: "slack-clone-8d051",
  storageBucket: "slack-clone-8d051.appspot.com",
  messagingSenderId: "187722628443",
  appId: "1:187722628443:web:7920f3f047d0cf40696e7e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
