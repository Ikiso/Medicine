import React from 'react';
import icon_add from '../images/icon-add.svg';

// TODO: всплывающие подсказки

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul className="sidebar__content" >
                <li className="li" >
                    <input className="input_file" onChange={(e) => {console.log(e.target.value)}} name="file" id="file" type="file"/>
                    <label className="label" htmlFor="file">
                        <span className="input__file-icon-wrapper">
                            <img className="input__file-icon" src={icon_add} alt="Выбрать файл"/>
                        </span>
                    </label>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;