// this file contains all api style requests
// contains firebase calls && tmdb calls

import firebase from '../firebaseConfig'
import store from './Redux/Store'
import axios from 'axios'
import { apiKey } from './apiKey';
import { useSelector } from 'react-redux';

//
// FIREBASE
//

export function auth () {
    // updates whenever the user login status changes in firebase
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log("auth watcher -- user is logged in");
            store.dispatch({type: 'SET_DB_UID', payload: user.uid});
            store.dispatch({ type: 'SET_USER_LOGGED_IN', payload: true });
            get_favorites();
        } else {
            console.log("auth watcher -- user is NOT logged in");
            store.dispatch({ type: 'SET_USER_LOGGED_IN', payload: false });
        }
    });
}

export function login(email, pass, props, set_error_msg) {
    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then((response) => { 
        props.history.push('/');
    })
    .catch(function(error) { 
        set_error_msg(error.message);
    })
}

export function create_user_account (email, pass) {
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

export function add_favorite(show_id) {
    console.log("adding a favorite -> show_id: " + show_id);

    const state = store.getState();
    const ref = firebase.firestore().collection("users").doc(state.db_uid);
    
    ref.update({
        shows: firebase.firestore.FieldValue.arrayUnion(show_id)
    }).then(() => {
        get_favorites();
    })
    
}

export function remove_favorite(show_id) {
    console.log('removing a favorite')

    const state = store.getState();
    const ref = firebase.firestore().collection("users").doc(state.db_uid);
    
    ref.update({
        shows: firebase.firestore.FieldValue.arrayRemove(show_id)
    }).then(() => {
        get_favorites();
    })
}

export async function get_favorites() {
    const state = store.getState();
    console.log(state.db_uid)
    if (state.db_uid) {
        const ref = firebase.firestore().collection("users").doc(state.db_uid);
        ref.get().then(async doc => {
            if (doc.exists) {
                const show_ids = doc.data().shows;
                console.log(show_ids)
                const shows = [];
                for (let i = 0; i < show_ids.length; i++) {
                    const show_data = await get_show_by_id(show_ids[i]);
                    shows.push(show_data);
                }
                console.log(shows);
                store.dispatch({ type: "SET_USER_FAVORITES", payload: shows });
            }
        })
    }
    

    // console.log(ref);
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

export function getAiringToday () {
    // get trending shows data and save to store
    const url = `https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}`;
    axios.get(url)
    .then((response) => {
        store.dispatch({ type: "SET_AIRING_TODAY", payload: response.data.results });
    })
    .catch((error) => {console.log(error)});
}

export function set_active_show(id) {
    // clear show first to prevent old active show from showing while new one waits for request
    store.dispatch({ type: "SET_ACTIVE_SHOW", payload: null });
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&append_to_response=credits`;
    axios.get(url)
    .then((response) => {
        store.dispatch({ type: "SET_ACTIVE_SHOW", payload: response.data });
    })
    .catch((error) => {console.log(error)});
}

export async function get_show_by_id(id) {
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&append_to_response=credits`;
    return axios.get(url)
    .then(res => {
        // console.log(res);
        return res.data;
    })
    .catch(e => {console.log(e) });
}

export function getPerson (id) {
    // get details for a specific person

    // clear first to prevent old active show from showing while new one waits for request
    store.dispatch({ type: "SET_ACTIVE_PERSON", payload: null });
    
    const url = `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&append_to_response=credits`;
    axios.get(url)
    .then((response) => {
        store.dispatch({ type: "SET_ACTIVE_PERSON", payload: response.data });
    })
    .catch((error) => {console.log(error)});
}

//
// TV MAZE API
//

function get_show_airtime(show_name) {
    const url = 'https://api.tvmaze.com/singlesearch/shows?q=' + show_name + '&embed=episodes';
    axios.get(url)
    .then(res => {
        console.log(res.data);
    })
}