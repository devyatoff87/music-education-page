import ACTIONS from "./app-actions"

export const addNewProduct = (productObj) =>
    ({ type: ACTIONS.ADD_NEW_PRODUCT, payload: productObj })

export const showNotification = (payload) => (
    { type: ACTIONS.SHOW_NOTIFICATION, payload: payload }
)

export const hideNotification = () => (
    { type: ACTIONS.HIDE_NOTIFICATION }
)

export const toggleDropdown = () => (
    { type: ACTIONS.TOGGLE_DROPDOWN }
)

export const hideDropdown = () => (
    { type: ACTIONS.HIDE_DROPDOWN }
)



