import React, { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppContext } from '../../context/app-context';
import { toggleDropdown } from "../../context/app-action-creators"

function CustomLink({ item, className_ }) {
    const { appState, dispatch } = useContext(AppContext);
    const dropdown = appState.dropdown
    const { title, to } = item
    console.log(dropdown);

    useEffect(() => {
        let toggle = document.querySelector(".dropdown_toggle");
        toggle.addEventListener("click", () => {
            dispatch(toggleDropdown())
        })
    }, [])

    return (
        <li className={`${item.dropdown ? "dropdown_toggle" : ""}`}>

            {item.dropdown &&
                <ul className='dropdown'>
                    {item.items &&
                        item.items.map((item_, index_) => {
                            return <NavLink key={index_} to={item_.to} className={className_}>
                                {item_.title}
                            </NavLink>

                        })
                    }
                </ul>}

            <NavLink to={to} className={className_}>
                {title}
            </NavLink>
        </li>
    );
}

export default CustomLink;


