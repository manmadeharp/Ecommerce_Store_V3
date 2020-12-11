import * as firebase from "firebase";

// Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyDV0MXytQ7BfpncyCZHpzJ5AJ7Kk1zDPzw",
    authDomain: "ecommercestore-babe6.firebaseapp.com",
    databaseURL: "https://ecommercestore-babe6.firebaseio.com",
    projectId: "ecommercestore-babe6",
    storageBucket: "ecommercestore-babe6.appspot.com",
    messagingSenderId: "383538495383",
    appId: "1:383538495383:web:8c6aefc3aa0fe18461ced2",
    measurementId: "G-K8P6GMS82S"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
