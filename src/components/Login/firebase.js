import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1kigB0Ofo1c-D8UkqO_LSfd7422qFtMU",
  authDomain: "cloud-cafe-cc0b5.firebaseapp.com",
  databaseURL: "https://cloud-cafe-cc0b5.firebaseio.com",
  projectId: "cloud-cafe-cc0b5",
  storageBucket: "cloud-cafe-cc0b5.appspot.com",
  messagingSenderId: "321201683527",
  appId: "1:321201683527:web:84206a24ff91b999018562",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default auth;
export { provider };
