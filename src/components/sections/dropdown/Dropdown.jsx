import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Dropdown_styles.scss"
import { getNavLinkClassName } from "../../../helpers/helpers.js"


function Dropdown() {


    return <ul className='dropdown'>
        <li className='nav_item'><NavLink to="products/guitar" className={({ isActive }) => isActive ? 'active nav_link' : 'inactive nav_link'} >Guitar</NavLink></li>
        <li className='nav_item'><NavLink to="products/recording" className={({ isActive }) => isActive ? 'active nav_link' : 'inactive nav_link'} >Recording</NavLink></li>
    </ul>
}

export default Dropdown;
