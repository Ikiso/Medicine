import React from 'react';
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import classes from './Authen.module.css';
import sign_up from '../images/sign_up.png';
import {AuthenState} from "../Context";

const Registration = () => {
    const {isLogin, setIsLogin} = AuthenState();

    return (
        <div className={classes.wrapper} >
            <div className={classes.container__regist}>
                <div className={classes.section_img}>
                    <img className={classes.img} src={sign_up} alt="sign_up"/>
                </div>

                <Input text="email" name="email" autocomplete="new-password" />
                <Input text="username" name="username" autocomplete="new-password" />
                <Input text="password" name="password" type="password" autocomplete="new-password" />
                <Input text="password again" name="password_again" type="password" autocomplete="new-password" />

                <div className={classes.button__send}>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        setIsLogin(!isLogin);
                    }} >Sign Up</Button>
                    <Link className={classes.link} to="/authorization" >Do you have an account?</Link>
                </div>
            </div>
        </div>
    );
};

export default Registration;