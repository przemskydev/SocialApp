import * as firebase from "firebase/app";

import "firebase/auth";
import 'firebase/firestore'
import 'firebase/storage'


const config = {
  apiKey: "AIzaSyAMRdszFF6bqd3ga0udY7Pkkl3qulqEOZI",
  authDomain: "ninesocial-e998e.firebaseapp.com",
  databaseURL: "https://ninesocial-e998e.firebaseio.com",
  projectId: "ninesocial-e998e",
  storageBucket: "ninesocial-e998e.appspot.com",
  messagingSenderId: "340318617230",
  appId: "1:340318617230:web:879fd765098680299fd3df",
  measurementId: "G-1SCE43548K"
};

const app = firebase.initializeApp(config);
const storage = firebase.storage()

export { app, storage }