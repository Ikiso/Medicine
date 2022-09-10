import React from 'react';
import classes from './Header.module.css';
import NavbarRouter from "../router/NavbarRouter";

const Header = () => {
    return (
        <header className={classes.header} >
            <div className={classes.header__inner}>
                {/*<div className="logo"></div>*/}
                <nav className={classes.nav}>
                    <NavbarRouter/>
                </nav>
            </div>
        </header>
    );
};

export default Header;