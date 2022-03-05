import React, { useContext, useEffect } from 'react'
import { UIContext } from '../../context/ui-context/ui-context'
import Notification from '../simple/notification/Notification';
import { hideNotification_action } from "../../context/ui-context/ui-action-creators"

function Home() {
    const { uiState, dispatch } = useContext(UIContext);
    const { notification } = uiState;
    const { text, style } = notification;

    useEffect(() => {

        return () => {
            setTimeout(() => {
                dispatch(hideNotification_action())
            }, 3000)
        }
    })

    return (
        <div className='container'>
            {notification.show && <Notification style={style} text={text} />}
        </div>
    )
}

export default Home
