import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.scss"

function Header() {
    const linkClassName = ({ isActive }) => (isActive ? 'active' : 'inactive')
    return (
        <div className='header'>
            <div className='header_inner'>
                <div className='logo'>
                    <img src='' alt='' />
                </div>
                <div className='navigation'>
                    <nav>
                        <NavLink
                            className={linkClassName}
                            to={"/"} >
                            Home
                        </NavLink>
                        <NavLink
                            className={linkClassName}
                            to={"/about"} >
                            About
                        </NavLink>
                        <NavLink
                            className={linkClassName}
                            to={"/products"} >
                            Products
                        </NavLink>
                        <NavLink
                            className={linkClassName}
                            to={"/products/guitar"} >
                            Guitar
                        </NavLink>
                        <NavLink
                            className={linkClassName}
                            to={"/products/recording"} >
                            Recording</NavLink>
                        <NavLink
                            className={linkClassName}
                            to={"/contact"} >
                            Contact</NavLink>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header
