import React, {useState} from 'react';
import {useHttp} from '../hooks/http.hook';

const HomePage = () => {

    const {loading, setLoading, request, error, clearError} = useHttp();

    const [form, setForm] = useState({
        disease_class: '', year: '', populated_area: '', population: '', morbidity_type: '', count: ''
    })

    const subtitleTable = (
        <tr className="tr__title">
            <td id="td__id" className="td__title">Номер</td>
            <td id="td__value" className="td__title">Значение</td>
            <td id="td__morbidity_type" className="td__title">Тип</td>
            <td id="td__population" className="td__title">Возраст</td>
            <td id="td__year" className="td__title">Год</td>
            <td id="td__disease_class" className="td__title">Заболевание</td>
            <td id="td__populated_area" className="td__title">Регион</td>
        </tr>
    )
    let [table, setTable] = useState((<table>{subtitleTable}</table>));
    let [elementCount, setElementCount] = useState(0);
    let [pageCount, setPageCount] = useState(0);
    let [currentPage, setCurrentPage] = useState(1);
    let [pageArray, setPageArray] = useState([]);
    let [data, setData] = useState([]);
    const limit = 30;

    const changeHandler = event => {
        if(event.target.name === 'count' && event.target.value > 180) {
            event.target.value = 180;
        }
        setForm({...form, [event.target.name]: event.target.value})
    }

    function Counter(number) {
        let count = number;

        return function () {
            return count++;
        };
    }

    function createTable(data, pageNumber = 1) {

        setLoading(true);
        let number = (pageNumber - 1) * limit + 1;
        let id = Counter(number);
        let table = [];

        if (data.length + 1 - number) {
            let tr = [];

            tr.push(subtitleTable);

            let _i = (data.length > number + limit) ? number + limit : data.length + 1;
            for (let i = number; i < _i; i++) {
                let item = data[i - 1];
                tr.push(
                    <tr>
                        <td className="td__title td__count">{id()}</td>
                        <td>{item.value}</td>
                        <td>{item.morbidity_type}</td>
                        <td>{item.population}</td>
                        <td>{item.year}</td>
                        <td>{item.disease_class}</td>
                        <td>{item.populated_area}</td>
                    </tr>
                );
            }

            table.push(<table>{tr}</table>);

        } else {
            table = 'По вашему запросу ничего не найдено';
        }

        setLoading(false);
        return table;
    }

    const findHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            data = await request('http://localhost:5000/api/value/one', 'POST', {...form});
            setData(data);

            elementCount = data.length;
            setElementCount( elementCount );
            pageCount = Math.ceil(elementCount / limit);
            setPageCount( pageCount );
            currentPage = 1;
            setCurrentPage(currentPage);
            pageArray = []

            for (let i = 0; i < pageCount; i++) {
                pageArray.push(i + 1);
            }

            setPageArray(pageArray);

            setTable('');
            setTable(createTable(data, currentPage));

        } catch (e) {
        }
        setLoading(false);
    }

    async function createFileHandler(e) {
        e.preventDefault();
        let a = await request('http://localhost:5000/api/value/file', 'POST', {data});
        console.log(a);
    }

    return (
        <div className="container">

            <form className="search" action="#">

                <p>
                    <span>Заболевание</span>
                    <select onChange={changeHandler} name="disease_class" id="disease_class">
                        <option value="">Не указан</option>
                        <option value="Инфекционные болезни">Инфекционные болезни</option>
                        <option value="Новообразования">Новообразования</option>
                        <option value="Болезни крови и кроветворных органов">Болезни крови и кроветворных органов</option>
                        <option value="Болезни эндокринной системы">Болезни эндокринной системы</option>
                        <option value="Психические расстройства">Психические расстройства</option>
                        <option value="Болезни нервной системы">Болезни нервной системы</option>
                        <option value="Болезни глаза и его придаточного аппарата">Болезни глаза и его придаточного аппарата</option>
                        <option value="Болезни уха и сосцевидного отростка">Болезни уха и сосцевидного отростка</option>
                        <option value="Болезни системы кровообращения">Болезни системы кровообращения</option>
                        <option value="Болезни органов дыхания">Болезни органов дыхания</option>
                        <option value="Болезни органов пищеварения">Болезни органов пищеварения</option>
                        <option value="Болезни кожи и подкожной клетчатки">Болезни кожи и подкожной клетчатки</option>
                        <option value="Болезни костно-мышечной системы">Болезни костно-мышечной системы</option>
                        <option value="Болезни мочеполовой системы">Болезни мочеполовой системы</option>
                        <option value="Беременность, роды и послеродовой период">Беременность, роды и послеродовой период</option>
                        <option value="Отдельные состояния, возникающие в перинатальном периоде">Отдельные состояния, возникающие в перинатальном периоде</option>
                        <option value="Врожденные аномалии">Врожденные аномалии</option>
                        <option value="Симптомы, признаки и отклонения от нормы">Симптомы, признаки и отклонения от нормы</option>
                        <option value="Травмы и отравления">Травмы и отравления</option>
                    </select>
                </p>

                <p>
                    <span>Год</span>
                    <select onChange={changeHandler} name="year" id="year">
                        <option value="">Не указан</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                    </select>
                </p>

                <p>
                    <span>Регион</span>
                    <select onChange={changeHandler} name="populated_area" id="populated_area">
                        <option value="">Не указан</option>
                        <option value="Абдулинский">Абдулинский</option>
                        <option value="Бугуруслан">Бугуруслан</option>
                        <option value="Бузулук">Бузулук</option>
                        <option value="Гайский">Гайский</option>
                        <option value="Кувандыкский">Кувандыкский</option>
                        <option value="Медногорск">Медногорск</option>
                        <option value="Новотроицк">Новотроицк</option>
                        <option value="Оренбург">Оренбург</option>
                        <option value="Орск">Орск</option>
                        <option value="Соль-Илецкий">Соль-Илецкий</option>
                        <option value="Сорочинский">Сорочинский</option>
                        <option value="Ясненский">Ясненский</option>
                        <option value="Адамовский">Адамовский</option>
                        <option value="Акбулакский">Акбулакский</option>
                        <option value="Александровский">Александровский</option>
                        <option value="Асекеевский">Асекеевский</option>
                        <option value="Беляевский">Беляевский</option>
                        <option value="Бугурусланский">Бугурусланский</option>
                        <option value="Бузулукский">Бузулукский</option>
                        <option value="Грачевский">Грачевский</option>
                        <option value="Домбаровский">Домбаровский</option>
                        <option value="Илекский">Илекский</option>
                        <option value="Кваркенский">Кваркенский</option>
                        <option value="Красногвардейский">Красногвардейский</option>
                        <option value="Курманаевский">Курманаевский</option>
                        <option value="Матвеевский">Матвеевский</option>
                        <option value="Новоорский">Новоорский</option>
                        <option value="Новосергиевский">Новосергиевский</option>
                        <option value="Октябрьский">Октябрьский</option>
                        <option value="Оренбургский">Оренбургский</option>
                        <option value="Первомайский">Первомайский</option>
                        <option value="Переволоцкий">Переволоцкий</option>
                        <option value="Пономаревский">Пономаревский</option>
                        <option value="Сакмарский">Сакмарский</option>
                        <option value="Саракташский">Саракташский</option>
                        <option value="Светлинский">Светлинский</option>
                        <option value="Северний">Северний</option>
                        <option value="Ташлинский">Ташлинский</option>
                        <option value="Тоцкий">Тоцкий</option>
                        <option value="Тюльганский">Тюльганский</option>
                        <option value="Шарлыкский">Шарлыкский</option>
                    </select>
                </p>

                <p>
                    <span>Возраст</span>
                    <select onChange={changeHandler} name="population" id="population">
                        <option value="">Не указан</option>
                        <option value="Взрослое">Взрослое</option>
                        <option value="Дети (0-14 лет)">Дети (0-14 лет)</option>
                        <option value="Подростки (15-17 лет)">Подростки (15-17 лет)</option>
                        <option value="Дети (0-17 лет)">Дети (0-17 лет)</option>
                    </select>
                </p>

                <p>
                    <span>Тип</span>
                    <select onChange={changeHandler} name="morbidity_type" id="morbidity_type">
                        <option value="">Не указан</option>
                        <option value="Общая">Общая</option>
                        <option value="Первичная">Первичная</option>
                    </select>
                </p>

                <p>
                    <span>Кол-во</span>
                    <input className="input__counter" name="count" onChange={changeHandler} type="number" step="1"
                           pattern="\d+" min="0" max="180"/>
                </p>

                <button disabled={loading} onClick={findHandler}>Отправить</button>
                {/*<button disabled={loading} onClick={createFileHandler}>скачать</button>*/}
                {/*<button><a href={} download>download</a></button>*/}

            </form>

            {loading ?
                (<div className="preloader-5"></div>)
                :
                (<div>
                    <section className="section__table">
                        <table>
                            {table}
                        </table>
                    </section>
                    <section className="section__pagination" >
                        {pageArray.map(p=>
                            <button
                                onClick={() => {
                                    currentPage = p;
                                    setTable(createTable(data, currentPage));
                                    setCurrentPage(currentPage);
                                }}
                                key={p}
                                className={ currentPage === p ? 'button__pagination button__current' : 'button__pagination '}
                            >
                                {p}
                            </button>
                        )}
                    </section>
                </div>)
            }

        </div>
    );
};

export default HomePage;