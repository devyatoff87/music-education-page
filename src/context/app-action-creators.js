import ACTIONS from "./app-actions"

export const addNewProduct = (productObj) =>
    ({ type: ACTIONS.ADD_NEW_PRODUCT, payload: productObj })