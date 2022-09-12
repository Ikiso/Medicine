import React, {createContext, useContext} from 'react';
import {useState} from "react";

const Authen = createContext(true);

const Context = ({children}) => {

    let [isLogin, setIsLogin] = useState(true);



    return (
        <Authen.Provider
            value={{isLogin, setIsLogin}}
        >
            {children}
        </Authen.Provider>
    );
};

export const AuthenState = () => {
    return useContext(Authen);
};

export default Context;