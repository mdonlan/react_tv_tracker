// this file contains all api style requests
// contains firebase calls && tmdb calls

import firebase from '../firebaseConfig'
import store from './Redux/Store'
import axios from 'axios'
import { apiKey } from './apiKey';

//
// FIREBASE
//

export function auth () {
    // updates whenever the user login status changes in firebase
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log("auth watcher -- user is logged in");
            store.dispatch({ type: 'SET_USER_LOGGED_IN', payload: true });
        } else {
            console.log("auth watcher -- user is NOT logged in");
            store.dispatch({ type: 'SET_USER_LOGGED_IN', payload: false });
        }
    });
}

export function signup (email, pass) {
    // use firebase auth to create a new user account
    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then((user) => {
        // after account is created add the user to the db
        firebase.firestore().collection("users").doc(user.user.uid).set({
            uid: user.user.uid,
            shows: []
        })
        .then(() => {})
        .catch((error) => {});
    })
    .catch((error) => {console.log(error)});
}

// export function login (email, password, history) {
//     return firebase.auth().signInWithEmailAndPassword(email, password)
//     .then((response) => { return true })
//     .catch(function(error) { console.log(error); return false})
// }

export function logout () {
    // signs the user out
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }, (error) => {
        // An error happened.
      });
}

//
// TMDB
//

export function getTrending () {
    // get trending shows data and save to store
    const url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`;
    axios.get(url)
    .then((response) => {
        store.dispatch({ type: "SET_TRENDING_SHOWS", payload: response.data.results });
    })
    .catch((error) => {console.log(error)});
}

export function getShow (id) {
    // get details for a specific show

    // clear show first to prevent old active show from showing while new one waits for request
    store.dispatch({ type: "SET_ACTIVE_SHOW", payload: null });
    
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&append_to_response=credits`;
    axios.get(url)
    .then((response) => {
        store.dispatch({ type: "SET_ACTIVE_SHOW", payload: response.data });
    })
    .catch((error) => {console.log(error)});
}