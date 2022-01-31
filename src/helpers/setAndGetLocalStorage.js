export const setItemsToLocalStorage = (key, value, ttl = 20) => {
    let item = {
        [key]: value,
        ttl: Date.now() + 10
    }
    localStorage.setItem(key, JSON.stringify(item))
}

export const getItemsFromLocalStorage = (key) => {
    const dataObject = JSON.parse(localStorage.getItem(key))
    const data = dataObject[key]
    return data
}