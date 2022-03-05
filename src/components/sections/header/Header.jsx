import React, { useContext, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.scss"
import Navbar from '../navbars/main/Navbar'
import CloseArea from "../../simple/CloseArea"
import { UIContext } from '../../../context/ui-context/ui-context'
import { hideCart, hideCloseArea, hideDropdown } from '../../../context/ui-context/ui-action-creators'
import AuthStatusIcon from '../auth-area/auth-icon'

function Header() {
    const context = useContext(UIContext);
    const { dispatch, uiState } = context;
    const { dropdown, closeArea, cart } = uiState

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
                    <div className='right-side'>
                        <Navbar></Navbar>
                        <AuthStatusIcon />
                    </div>
                </div>
                {dropdown && <CloseArea onCallbackClick={onHideHandle}></CloseArea>}
                {cart && <CloseArea onCallbackClick={onHideHandle}></CloseArea>}
            </div>
        </>
    )
}

export default Header
