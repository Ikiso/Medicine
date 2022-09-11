import React from 'react';
import classes from "./Authen.module.css";
import sign_in from "../images/sign_in.png";
import Input from "../components/Input";
import Button from "../components/Button";
import {Link} from "react-router-dom";
import {AuthenState} from "../Context";

const Authorization = () => {
    const {isLogin, setIsLogin} = AuthenState();

    return (
        <div className={classes.wrapper} >
            <div className={classes.container__author}>
                <div className={classes.section_img}>
                    <img className={classes.img} src={sign_in} alt="sign_in"/>
                </div>

                <Input text="username" name="username"/>
                <Input text="password" name="password" type="password"/>

                <div className={classes.button__send}>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        setIsLogin(!isLogin);
                    }} >Sign In</Button>
                    <Link className={classes.link} to="/registration" >Don't have an account?</Link>
                </div>
            </div>
        </div>
    );
};

export default Authorization;