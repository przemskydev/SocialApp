import Rebase from 're-base';
import * as firebase from 'firebase';

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

const firebaseConfig = firebase.initializeApp(config);

const base = Rebase.createClass(firebaseConfig.database());

export default firebaseConfig;