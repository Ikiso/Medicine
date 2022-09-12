import React, {useState} from 'react';
import icon_add from "../images/icon-add.svg";

const Parser = () => {
    const [table, setTable] = useState(React.createElement('table', null));

    let json = [
        ["Болезни глаза и его придаточного аппарата","Взрослое",null,null,null,"Дети (0-14 лет)",null,null,null],
        ["Общая",2016,2017,2018,2019,2016,2017,2018,2019],
        ["Абдулинский",7.23,5.04,5.96,6.21,20.77,20.17,18.7,18.02],
        ["Бугуруслан",4.41,4.69,10.35,9.2,25.71,27.37,47.8,54],
        ["Бузулук",8.21,7.98,8.86,12.89,12.61,18.99,19.1,21.66],
        ["Гайский",15.17,16.52,14.99,15.98,3.06,7.25,7.66,10.99],
        ["Кувандыкский",16.89,25.19,19.35,16.58,28.71,33.17,27.71,23.21],
        ["Медногорск",24.93,21.52,21.76,19.85,11.73,13.36,10.92,11.37],
        ["Новотроицк",12.34,10.09,12.77,15.24,3.91,3.06,4.27,4.95],
        ["Оренбург",11.74,10.65,12.85,12.33,12.33,10.28,12.64,13.14],
        ["Орск",7.66,10.54,13.14,13.97,16.5,14.52,11.72,10.95],
        ["Соль-Илецкий",6.42,9.06,7.13,8.25,1.95,1.14,8.52,43.28],
        ["Сорочинский",8.06,8.49,8.26,8.7,2.88,3.01,2.94,6.81],
        ["Ясненский",19.68,19.2,13.28,14.16,24.97,21.21,21.11,25.04]
    ]

    function counter () {
        let count = 1;

        return () => count++;
    }

    function createTable (array) {
        let tds = [];
        let trs = [];

        array.forEach(item => {
            tds = [];

            item.forEach(data => {
                const td = React.createElement('td', {className: 'cell'}, data);
                tds.push(td);
            })

            trs.push(React.createElement('tr', null, ...tds));
        })

        return React.createElement('table', {className: 'table-inner'}, ...trs);
    }

    function handleAddFile () {
        setTable( createTable(json) );
    }

    return (
        <div className="parser" >
            <nav className="sidebar">
                <ul className="sidebar__content" >
                    <li className="li" >
                        <input className="input_file" onChange={(e) => {console.log(e.target.value)}} name="file" id="file" type="file"/>
                        <label className="label" onClick={handleAddFile} htmlFor="file">
                            <span className="input__file-icon-wrapper">
                                <img className="input__file-icon" src={icon_add} alt="Выбрать файл"/>
                            </span>
                        </label>
                    </li>
                </ul>
            </nav>


            <div className="parser__container">
                <div className="table">
                    {table}
                </div>
            </div>
        </div>
    );
};

export default Parser;