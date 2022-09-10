import React from 'react';
import classes from './NavbarLi.module.css';
import './NavbarLi.module.css';
import { NavLink } from "react-router-dom";

// TODO: два разных компонента, кнопкообразные и обычные
// TODO: другой вид для активной страницы

const NavbarLi = ({ children, to, view = '', ...props }) => {
    function setStyle (view) {
        if (view) {
            return classes[view];
        }
        return classes.nav__link;
    }

    return (
        <li className={classes.nav__list_link}>
            <NavLink
                to={to}
                className={setStyle(view)}
                {...props}
            >
                {children}
            </NavLink>
        </li>
    );
};

export default NavbarLi;