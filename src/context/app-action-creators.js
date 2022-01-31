import ACTIONS from "./app-actions"
import products from "../data/products_DATA"
import { setItemsToLocalStorage } from "../helpers/helpers"


export const addNewProduct = (productObj) =>
    ({ type: ACTIONS.ADD_NEW_PRODUCT, payload: productObj })


const fetchSuccess = (products) => {
    return {
        type: ACTIONS.INIT_PRODUCTS,
        payload: products
    }
}

const fetchFailure = (err) => {
    return {
        type: ACTIONS.INIT_PRODUCTS_FAILED,
        payload: err
    }
}

export const initProducts = (dispatch) => {
    return () => {
        setTimeout(() => {
            dispatch(fetchSuccess(products));
            setItemsToLocalStorage("products", products)
        }, 1000)
    }
}

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


