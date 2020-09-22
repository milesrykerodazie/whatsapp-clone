import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBTFfpQjvrwu9pe1G0oA7AGdmPwQY1A54I",
    authDomain: "whatsapp-clone-cde1c.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-cde1c.firebaseio.com",
    projectId: "whatsapp-clone-cde1c",
    storageBucket: "whatsapp-clone-cde1c.appspot.com",
    messagingSenderId: "577580844783",
    appId: "1:577580844783:web:59b2289a290de2aed4bd1a",
    measurementId: "G-4Z4GZC7Y5Z"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;