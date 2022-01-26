import { act } from "react-dom/cjs/react-dom-test-utils.production.min"
import ACTIONS from "./app-actions"
import { getItems } from "./app-reducer-helpers"


export const reducer = (state, action) => {
    switch (action.type) {

        //PRODUCTS
        case (ACTIONS.ADD_NEW_PRODUCT):
            return {
                ...state, products: (() => {
                    let items = getItems(action.payload, state.products)
                    return items
                })()
            }

        //NOTIFICATIONS
        case (ACTIONS.SHOW_NOTIFICATION):
            return {
                ...state, notification: {
                    show: true,
                    text: action.payload.text,
                    style: action.payload.style
                }
            }
        case (ACTIONS.HIDE_NOTIFICATION):
            return {
                ...state, notification: {
                    show: false
                }
            }

        //DROPDOWN
        case (ACTIONS.TOGGLE_DROPDOWN):
            return {
                ...state, dropdown: state.dropdown ? false : true
            }
        case (ACTIONS.HIDE_DROPDOWN):
            return {
                ...state, dropdown: false
            }
    }
}

export default reducer