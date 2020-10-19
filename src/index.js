import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import { QueryParamProvider } from 'use-query-params';

import "regenerator-runtime/runtime.js"; // needed for async

import App from './Components/App';
import store from './Redux/Store';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <QueryParamProvider ReactRouterRoute={Route}>
                <App />
            </QueryParamProvider>
        </Provider>
    </BrowserRouter>,
    document.querySelector(".root")
);
