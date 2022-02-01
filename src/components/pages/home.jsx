import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/app-context'
import AddProductForm from '../sections/add-product-form/AddProductForm';
import Notification from '../simple/notification/Notification';
import { hideNotification, initProducts } from "../../context/app-action-creators"

function Home() {
    const { appState, dispatch } = useContext(AppContext);
    const { notification } = appState;
    const { text, style } = notification

    useEffect(() => {
        initProducts(dispatch)()
    }, [])

    useEffect(() => {
        return () => {
            setTimeout(() => {
                dispatch(hideNotification())
            }, 3000)
        }
    })

    return (
        <div className='container'>
            {notification.show && <Notification style={style} text={text} />}
            <AddProductForm />
        </div>
    )
}

export default Home
