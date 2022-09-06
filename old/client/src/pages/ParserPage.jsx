import React, {useState} from 'react';
import {useHttp} from "../hooks/http.hook";
import readXlsxFile from 'read-excel-file';
import primer from './пример.xlsx';


const ParserPage = () => {
    const {loading, setLoading, request, error, clearError} = useHttp();
    let [download, setDownload] = useState(false);
    let [status, setStatus] = useState('');

    function addSelectedFile(event) {
        readXlsxFile(event.target.files[0]).then((rows) => {
            setData(rows);
        })

        setDownload(true)
    }

    const [data, setData] = useState([]);
    let [json, setJson] = useState([]);

    function toJSONHandler() {

        json = [];
        setJson(json);

        let lengthRow = data.length;
        let lengthColumn = data[0].length;

        let _diseases = data[0][0];
        let _morbidity_type = data[1][0];
        let _year;
        let _populated_area;
        let _population;
        let _value;

        for (let i = 1; i < lengthColumn; i++) {
            _year = data[1][i];
            for (let j = 2; j < lengthRow; j++) {
                _value = data[j][i];

                _populated_area = data[j][0];

                let n = i;
                while(!data[0][n] && n > 0) {
                    --n;
                }
                _population = data[0][n];

                let obj = {
                    disease_class: _diseases,
                    year: _year,
                    populated_area: _populated_area,
                    population: _population,
                    morbidity_type: _morbidity_type,
                    value: _value
                }

                json.push(obj);
                setJson(json);
            }
        }
        console.log(json);
        console.log(JSON.stringify(json));
    }

    async function sendData(json) {
        console.log(json);
        let data = await request('http://localhost:5000/api/value/create', 'POST', json);
        console.log(data);
        setStatus(data)
    }

    async function division(json) {

        if (json.length > 170) {
            let file1 = json.slice(0, json.length / 2);
            await division(file1);
            let file2 = json.slice(json.length / 2, json.length);
            await division(file2);
        } else {
            await sendData(json);
        }
    }

    async function sendHandler() {
        await division(json)
    }

    return (
        <div className="container">

            <section className="section__add_file">
                <div>
                    <button className="button__convert" ><a href={primer} download>Скачать пример файла</a></button>
                </div>
                <div className="input__add_file" >
                    <div className="form-group">
                        <label className={download ? 'label__download' : 'label'}>
                            <span className={download ? 'input__add_file__title__download' : 'input__add_file__title'}>Добавить файл</span>
                            <input disabled={loading} type="file" accept=".xls,.xlsx" onChange={addSelectedFile} />
                        </label>
                    </div>
                </div>
                <div>
                    <button disabled={loading} className="button__convert" onClick={toJSONHandler}>Считать файл</button>
                </div>
                <div>
                    <button disabled={loading} className="button__convert" onClick={sendHandler}>Загрузить в базу</button>
                </div>
            </section>
            <section className="section__status" >
                {status ?
                    status[0] : ''
                }
            </section>
            {loading ?
                (<div className="preloader-5"></div>)
                :
                (<div></div>)
            }
        </div>
    );
};

export default ParserPage;