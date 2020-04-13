import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { createRootReducer } from "./Reducer";
import thunk from "redux-thunk";
import { createBrowserHistory } from 'history'
import { routerMiddleware,ConnectedRouter } from 'connected-react-router'

export const history = createBrowserHistory()

const store = createStore(
    createRootReducer(history),
    {},
    compose(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
);
export const StateProvider = ({ children }) => (
    <Provider store={store}>
         <ConnectedRouter history={history}> 
        {children}
        </ConnectedRouter>
    </Provider>
);