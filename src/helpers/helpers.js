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

export const getNavLinkClassName = (navLinkClassName) => {
    const linkClassName = ({ isActive }) => {
        return isActive ? 'active ' + navLinkClassName : 'inactive ' + navLinkClassName
    }
    return linkClassName()
}