import React, {createContext, useContext} from 'react';
import {useState} from "react";

const Data = createContext([]);

const Context = ({children}) => {

    let [countElement, setCountElement] = useState(0);
    let [countPage, setCountPage] = useState(0);
    let [currentPage, setCurrentPage] = useState(1);
    let [pageArray, setPageArray] = useState([]);
    let [data, setData] = useState([]);
    const limit = 30;

    return (
        <Context.Provider
            value={{
                limit,
                data, setData,
                countElement, setCountElement,
                countPage, setCountPage,
                currentPage, setCurrentPage,
                pageArray, setPageArray
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const DataState = () => {
    return useContext(Data);
};

export default Context;

