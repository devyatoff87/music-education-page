import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from '../dropdown/Dropdown';
import "./Navbar_styles.scss"
import { getNavLinkClassName } from "../../../helpers/helpers.js"
import { showCloseArea, toggleDropdown } from "../../../context/app-action-creators"
import { AppContext } from '../../../context/app-context';

function Navbar() {
    const context = useContext(AppContext)
    const { appState, dispatch } = context
    const dropdown = appState.dropdown

    const toggle = () => {
        dispatch(toggleDropdown())
        dispatch(showCloseArea())
    }

    return <nav>
        <ul>
            <li className='nav_item'><NavLink to="/" className={({ isActive }) => getNavLinkClassName("nav_link", isActive)} >Home</NavLink></li>
            <li className='nav_item'><NavLink to="/about" className={({ isActive }) => getNavLinkClassName("nav_link", isActive)} >About</NavLink></li>
            <li className='nav_item toggle' onClick={() => toggle()} >
                <div className='toggle_items_container'>
                    <div to="#" className={'nav_link'} >Products</div>
                    <span className={`${dropdown && "rotate-90"} curret`}>{"<"}</span>
                </div>
                {dropdown && <Dropdown ></Dropdown>}
            </li>
            <li className='nav_item'><NavLink to="/contact" className={({ isActive }) => getNavLinkClassName("nav_link", isActive)} >Contact</NavLink></li>
        </ul>
    </nav>
}

export default Navbar
