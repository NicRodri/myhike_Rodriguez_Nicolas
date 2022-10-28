//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
  apiKey: "AIzaSyBRshGfC8kb82mLjKWtjmy6SFKPcr0xX2g",
  authDomain: "comp1800-202230-6a74a.firebaseapp.com",
  projectId: "comp1800-202230-6a74a",
  storageBucket: "comp1800-202230-6a74a.appspot.com",
  messagingSenderId: "989610791413",
  appId: "1:989610791413:web:e0eefa7ba7bcdbc2f0d0bc"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
