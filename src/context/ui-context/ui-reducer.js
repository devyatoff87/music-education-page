import ACTIONS from "./ui-actions"
import { getItems } from "./ui-reducer-helpers"


export const reducer = (state, action) => {
    switch (action.type) {
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

        //CLOSE AREA
        case (ACTIONS.SHOW_CLOSE_AREA):
            return {
                ...state, closeArea: true
            }
        case (ACTIONS.HIDE_CLOSE_AREA):
            return {
                ...state, closeArea: false
            }

        //HIDE SHOW CART
        case (ACTIONS.SHOW_CART):
            return {
                ...state, cart: true
            }

        case (ACTIONS.TOGGLE_CART):
            return {
                ...state, cart: state.cart ? false : true
            }

        case (ACTIONS.HIDE_CART):
            return {
                ...state, cart: false
            }
    }
}

export default reducer