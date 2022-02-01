import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from '../../dropdown/Dropdown';
import "./Navbar_styles.scss"
import { getNLClassName } from "../../../../helpers/helpers.js"
import { showCart, showCloseArea, toggleDropdown, toggleCart } from "../../../../context/app-action-creators"
import { AppContext } from '../../../../context/app-context';
import RoundIcon from '../../../simple/round-icon/RoundIcon';
import { HiShoppingCart } from "/node_modules/react-icons/hi/index.js"
import Cart from '../../cart/Cart';


function Navbar() {
    const context = useContext(AppContext)
    const { appState, dispatch } = context
    const dropdown = appState.dropdown
    const cart = appState.cart
    return <nav>
        <ul>
            <li className='nav_item'><NavLink to="/" className={({ isActive }) => getNLClassName("nav_link", isActive)} >Home</NavLink></li>
            <li className='nav_item'><NavLink to="/about" className={({ isActive }) => getNLClassName("nav_link", isActive)} >About</NavLink></li>
            <li className='nav_item'><NavLink to="/products" className={({ isActive }) => getNLClassName("nav_link", isActive)} >Unterricht / Kurse</NavLink></li>
            <li className='nav_item'><NavLink to="/contact" className={({ isActive }) => getNLClassName("nav_link", isActive)} >Contact</NavLink></li>
            <li className='nav_item'>
                <RoundIcon IconComponent={<HiShoppingCart />}
                    onClickCallBack={() => {
                        dispatch(toggleCart())
                    }}
                />
                {cart && <Cart />}
            </li>
        </ul>
    </nav>
}

export default Navbar
