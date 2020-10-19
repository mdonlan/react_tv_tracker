import { createStore } from "redux";

const initialState = {
    userLoggedIn: false,
    trendingShows: [],
    airingToday: [],
    activeShow: null,
    loginStatusSet: false,
    activePerson: null,
    db_uid: null,
    user_favorites: []
};

function reducer (state = initialState, action) {
    switch (action.type) {
        case "SET_USER_LOGGED_IN": 
            return {
                ...state,
                userLoggedIn: action.payload,
                loginStatusSet: true
            };
        case "SET_TRENDING_SHOWS": 
            return {
                ...state,
                trendingShows: action.payload
            };
        case "SET_AIRING_TODAY": 
            return {
                ...state,
                airingToday: action.payload
            };
        case "SET_ACTIVE_SHOW": 
            return {
                ...state,
                activeShow: action.payload
            };
        case "SET_ACTIVE_PERSON": 
            return {
                ...state,
                activePerson: action.payload
            };
        case "SET_DB_UID": 
            return {
                ...state,
                db_uid: action.payload
            };
        case "SET_USER_FAVORITES": 
            return {
                ...state,
                user_favorites: action.payload
            };
        default:
            return state;
    }
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;