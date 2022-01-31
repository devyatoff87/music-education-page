import React, { useReducer } from 'react';
import { AppContext } from './app-context';
import ACTIONS from "./app-actions"
import reducer from './app-reducer';

export const initState = {
    products: [],
    counter: 1,
    notification: {
        show: false,
        text: "",
        style: "success"
    },
    dropdown: false,
    closeArea: false
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
