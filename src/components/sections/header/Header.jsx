import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.scss"
import Navbar from '../navbar/Navbar'
import CloseHoc from '../../simple/close-hoc/CloseHoc'
import { AppContext } from '../../../context/app-context'
import { hideDropdown } from '../../../context/app-action-creators'

function Header() {
    const context = useContext(AppContext);
    const { dispatch } = context;

    const onHideHandle = () => {
        dispatch(hideDropdown())
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
                <CloseHoc onCallbackClick={onHideHandle}></CloseHoc>
            </div>
        </>
    )
}

export default Header
