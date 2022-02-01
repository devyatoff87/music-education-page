import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "./ProductsNavbar_style.scss"
import { getNLClassName } from '../../../../helpers/helpers';

function ProductsNavbar() {
    const loc = useLocation()

    return <div className='products_navigation'>
        <ul className='inner'>
            <li className='nav_item' key="a">
                <NavLink className={({ isActive }) => getNLClassName("nav_link", isActive)} to="courses">Kurse</NavLink>
            </li>
            <li className='nav_item' key="b">
                <NavLink className={({ isActive }) => getNLClassName("nav_link", isActive)} to="lessons">Unterricht</NavLink>
            </li>
            <li className='nav_item' key="c">
                <NavLink className={({ isActive }) => getNLClassName("nav_link", isActive)} to="how-it-works">How it works</NavLink>
            </li>
        </ul>
    </div>
}

export default ProductsNavbar;
