// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
exports.firebaseConfig = {
  apiKey: "AIzaSyAExxVIg3E6rWshRc7ojDZU8DqpWpAelaI",
  authDomain: "seals-6db95.firebaseapp.com",
  projectId: "seals-6db95",
  storageBucket: "seals-6db95.appspot.com",
  messagingSenderId: "277965067546",
  appId: "1:277965067546:web:cd3dbf0072768c1ebe48a3",
};

exports.intializeFirebaseApp = () => {
  // Initialize Firebase
  const app = initializeApp(this.firebaseConfig);
};
