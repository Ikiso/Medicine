import React from 'react';
import classes from './Navbar.module.css';
import {Link} from "react-router-dom";
import ParserPage from "../../pages/ParserPage";
import HomePage from "../../pages/HomePage";

const Navbar = () => {
    return (
        <nav className={classes.menu}>
            <ul className={classes.menu__drop_down}>
                <li className={classes.menu__drop_down_item}>
                    <Link className={classes.menu__drop_down_link} to="/" components={HomePage} >
                        Посмотреть данные
                    </Link>
                </li>
                <li className={classes.menu__drop_down_item}>
                    <Link className={classes.menu__drop_down_link} to="/parser" components={ParserPage} >
                        Добавить файл
                    </Link>
                </li>

                {/*<li className={classes.menu__drop_down_item}>*/}
                {/*    <Link className={classes.menu__drop_down_link} to="/read" components={PageDisease} >*/}
                {/*        read*/}
                {/*    </Link>*/}
                {/*</li>*/}
                {/*<li className={classes.menu__drop_down_item}>*/}
                {/*    <Link className={classes.menu__drop_down_link} to="/create" components={PageRegion} >*/}
                {/*        create*/}
                {/*    </Link>*/}
                {/*</li>*/}
                {/*<li className={classes.menu__drop_down_item}>*/}
                {/*    <Link className={classes.menu__drop_down_link} to="/update" components={PageAge} >*/}
                {/*        update*/}
                {/*    </Link>*/}
                {/*</li>*/}
                {/*<li className={classes.menu__drop_down_item}>*/}
                {/*    <Link className={classes.menu__drop_down_link} to="/delete" components={PageYear} >*/}
                {/*        delete*/}
                {/*    </Link>*/}
                {/*</li>*/}
            </ul>
        </nav>
    );
};

export default Navbar;