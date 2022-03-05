export const getItems = (payload, products) => {

    let allProducts = [...products];

    allProducts.forEach((prod) => {
        if (prod.category == payload.category) {
            prod.items.push(payload)
        }
    })


    return allProducts

}