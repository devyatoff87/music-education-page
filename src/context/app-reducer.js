import products from "../data/products_DATA"
import ACTIONS from "./app-actions"

const getItems = (payload, products) => {

    let allProducts = [...products];

    const categoryName = payload.category

    const foundObject = products.find((prod) => {
        return prod.category == payload.category
    })

    allProducts.forEach((prod) => {
        if (prod.category == payload.category) {
            prod.items.push(payload)
        }
    })
    return allProducts
}

export const reducer = (state, action) => {
    switch (action.type) {
        case (ACTIONS.ADD_NEW_PRODUCT):
            return {
                ...state, products: getItems(action.payload, state.products)
            }
    }
}

export default reducer