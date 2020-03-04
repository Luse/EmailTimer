import React from "react";
import {Provider} from "react-redux";
import {createStore, applyMiddleware } from "redux";
import {Reducer} from "./Reducer";
import thunk from "redux-thunk";

const store = createStore(Reducer,{}, applyMiddleware(thunk));
export const StateProvider = ({children}) => (
    <Provider store={store}>
        {children}
    </Provider>
);