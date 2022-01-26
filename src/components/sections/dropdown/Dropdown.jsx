import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Dropdown_styles.scss"
import { getNavLinkClassName } from "../../../helpers/helpers.js"


function Dropdown() {
    const linkClassName = getNavLinkClassName("nav_link")

    return <ul className='dropdown'>
        <li className='nav_item'><NavLink to="products/guitar" className={linkClassName} >Guitar</NavLink></li>
        <li className='nav_item'><NavLink to="products/recording" className={linkClassName} >Recording</NavLink></li>
    </ul>
}

export default Dropdown;
