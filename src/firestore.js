import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBlOO4OD5PyjhUqW1BbPYnRw6dOBsRkHfM",
  authDomain: "bookshop-8111b.firebaseapp.com",
  databaseURL: "https://bookshop-8111b.firebaseio.com",
  projectId: "bookshop-8111b",
  storageBucket: "bookshop-8111b.appspot.com",
  messagingSenderId: "1091649613712",
  appId: "1:1091649613712:web:aeed9370bd8d4f4ce04d15"
};

const db = firebase.initializeApp(config).firestore();

export default db;