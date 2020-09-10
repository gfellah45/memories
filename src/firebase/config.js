import * as firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

require("dotenv").config();

const firebaseConfig = {
  apiKey: "AIzaSyBN39li6vVYRcmH_7XcCa6d27l-22-SMus",
  authDomain: "photo-store-d1b49.firebaseapp.com",
  databaseURL: "https://photo-store-d1b49.firebaseio.com",
  projectId: "photo-store-d1b49",
  storageBucket: "photo-store-d1b49.appspot.com",
  messagingSenderId: "186359157128",
  appId: "1:186359157128:web:c83f97ac4da73f11f9ea3d",
  measurementId: "G-NH0K8464CL",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectDatabase = firebase.firestore();
const firebaseAuth = firebase.auth();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {
  projectDatabase,
  projectStorage,
  firebaseAuth,
  timeStamp,
  firebase,
  app,
};
