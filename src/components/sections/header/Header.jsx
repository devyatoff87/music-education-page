import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.scss"
import Navbar from '../navbars/main/Navbar'
import CloseArea from "../../simple/CloseArea"
import { AppContext } from '../../../context/app-context'
import { hideCart, hideCloseArea, hideDropdown } from '../../../context/app-action-creators'

function Header() {
    const context = useContext(AppContext);
    const { dispatch, appState } = context;
    const { dropdown, closeArea, cart } = appState

    const onHideHandle = () => {
        dispatch(hideDropdown())
        dispatch(hideCloseArea())
        dispatch(hideCart())
    }

    return (
        <>
            <div className='header'>
                <div className='header_inner'>
                    <div className='logo'>
                        <NavLink to="/">
                            LOGO
                        </NavLink>
                    </div>
                    <Navbar></Navbar>
                </div>
                {dropdown && <CloseArea onCallbackClick={onHideHandle}></CloseArea>}
                {cart && <CloseArea onCallbackClick={onHideHandle}></CloseArea>}
            </div>
        </>
    )
}

export default Header
