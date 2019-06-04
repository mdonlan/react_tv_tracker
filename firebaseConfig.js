import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAXre43T7ik4SqNEeQDh6IhO8n7H8hWCbU",
    authDomain: "react-tv-tracker.firebaseapp.com",
    databaseURL: "https://react-tv-tracker.firebaseio.com",
    projectId: "react-tv-tracker",
    storageBucket: "react-tv-tracker.appspot.com",
    messagingSenderId: "818715100337",
    appId: "1:818715100337:web:5fc8d0c7e07b49fb"
};

firebase.initializeApp(config);

export default firebase;