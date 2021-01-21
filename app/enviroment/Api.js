import firebase from 'firebase'
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDVdUzLO0SAGAahUA69a2Q_DgSb1WRQCrU",
  authDomain: "iot-react-from.firebaseapp.com",
  databaseURL: "https://iot-react-from.firebaseio.com",
  projectId: "iot-react-from",
  storageBucket: "iot-react-from.appspot.com",
  messagingSenderId: "878140672210",
  appId: "1:878140672210:web:8429e7f29cd997edb5050b",
  measurementId: "G-SSHN1BY6RC",
});

export default firebaseConfig;
