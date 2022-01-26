import React, { useReducer } from 'react';
import { AppContext } from './app-context';
import products from "../data/products_DATA"
import ACTIONS from "./app-actions"
import reducer from './app-reducer';

export const initState = {
    products: products,
    counter: 1,
    notification: {
        show: false,
        text: "",
        style: "success"
    },
    dropdown: false
}

function AppState({ children }) {

    const [appState, dispatch] = useReducer(reducer, initState);

    return (
        <AppContext.Provider value={{ appState: appState, dispatch: dispatch }} >
            {children}
        </AppContext.Provider>
    )
}

export default AppState;
