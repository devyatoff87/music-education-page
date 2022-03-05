import ACTIONS from "./ui-actions"

export const showNotification = (payload) => (
    { type: ACTIONS.SHOW_NOTIFICATION, payload: payload }
)

export const hideNotification_action = () => (
    { type: ACTIONS.HIDE_NOTIFICATION }
)

export const toggleDropdown = () => (
    { type: ACTIONS.TOGGLE_DROPDOWN }
)

export const hideDropdown = () => (
    { type: ACTIONS.HIDE_DROPDOWN }
)

export const showCloseArea = () => (
    { type: ACTIONS.SHOW_CLOSE_AREA }
)

export const hideCloseArea = () => (
    { type: ACTIONS.HIDE_CLOSE_AREA }
)

export const showCart = () => (
    { type: ACTIONS.SHOW_CART }
)

export const toggleCart = () => (
    { type: ACTIONS.TOGGLE_CART }
)

export const hideCart = () => (
    { type: ACTIONS.HIDE_CART }
)


