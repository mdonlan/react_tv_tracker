import { createStore } from "redux";

const initialState = {
    userLoggedIn: false,
    trendingShows: [],
    activeShow: null
};

function reducer (state = initialState, action) {
    switch (action.type) {
        case "SET_USER_LOGGED_IN": 
            return {
                ...state,
                userLoggedIn: action.payload
            };
        case "SET_TRENDING_SHOWS": 
            return {
                ...state,
                trendingShows: action.payload
            };
        case "SET_ACTIVE_SHOW": 
            return {
                ...state,
                activeShow: action.payload
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