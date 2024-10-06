
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBuyHKRYxa2YMBzySXbyhIZhXeVqO-YTBg",

  authDomain: "networking-2-proj-6969.firebaseapp.com",

  databaseURL: "https://networking-2-proj-6969-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "networking-2-proj-6969",

  storageBucket: "networking-2-proj-6969.appspot.com",

  messagingSenderId: "680913895246",

  appId: "1:680913895246:web:1fbf092ab9cd90723fa81f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);

// Initialize Realtime Database (or Firestore depending on your choice)
const database = getDatabase(app); // For Realtime Database
// OR
// const firestore = getFirestore(app); // For Firestore

// Reference to the path where data will be written
const dbRef = ref(database, 'users/1');

// Write user data
set(dbRef, {
    username: "john_doe",
    email: "john.doe@example.com",
    description: "testing firebase, I wanna know how to use firebase database"
})
.then(() => {
    console.log("Data written successfully!");
})
.catch((error) => {
    console.error("Error writing data:", error);
});
