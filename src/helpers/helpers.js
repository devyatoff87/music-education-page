export const resetFormValues = ({ classNameOfForm, classNameException = "", setTimeOutTime = 0 }) => {
    const elems = document.querySelector(classNameOfForm).elements;

    setTimeout(() => {
        for (let el in elems) {
            let elem = elems[el]
            if (elem.value && elem.className !== classNameException) {
                elem.value = ""
            }
        }
    }, setTimeOutTime)
}

export const getNavLinkClassName = (navLinkClassName, isActive) => {
    return isActive ? 'active ' + navLinkClassName : 'inactive ' + navLinkClassName
}

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