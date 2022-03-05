import React, { useReducer } from 'react';
import { UIContext } from './ui-context';
import reducer from './ui-reducer';

export const initState = {
    notification: {
        show: false,
        text: "",
        style: "success"
    },
    dropdown: false,
    closeArea: false,
    cart: false
}

function UIStateWrapper({ children }) {
    const [uiState, dispatch] = useReducer(reducer, initState);

    return (
        <UIContext.Provider value={{ uiState: uiState, dispatch }} >
            {children}
        </UIContext.Provider>
    )
}

export default UIStateWrapper;
