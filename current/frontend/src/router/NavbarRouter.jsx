import React from 'react';
import classes from "../components/NavbarLi.module.css";
import NavbarLi from "../components/NavbarLi";

const NavbarRouter = () => {
    const isLogin = false;

    return (
        <div>
            {isLogin
                ?
                <ul className={classes.nav__list}>
                    <NavbarLi to="/" >О нас</NavbarLi>
                    <NavbarLi to="/parser" >Парсер</NavbarLi>
                    <NavbarLi to="/documentation" >Документация</NavbarLi>
                    <NavbarLi to="/data" >Данные</NavbarLi>
                    <NavbarLi to="/profile" >Профиль</NavbarLi>
                    <NavbarLi view="secondary" to="/" >Выйти</NavbarLi>
                </ul>
                :
                <ul className={classes.nav__list}>
                    <NavbarLi to="/" >О нас</NavbarLi>
                    <NavbarLi view="primary" to="/registration" >Регистрация</NavbarLi>
                    <NavbarLi view="primary" to="/authorization" >Авторизация</NavbarLi>
                </ul>
            }
        </div>
    );
};

export default NavbarRouter;