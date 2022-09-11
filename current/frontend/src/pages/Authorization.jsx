import React from 'react';
import classes from "./Authen.module.css";
import sign_in from "../images/sign_in.png";
import Input from "../components/Input";
import Button from "../components/Button";
import {Link} from "react-router-dom";

const Authorization = () => {
    return (
        <div className={classes.wrapper} >
            <div className={classes.container__author}>
                <div className={classes.images}>
                    <img src={sign_in} alt="sign_in"/>
                </div>

                <Input text="username" name="username"/>
                <Input text="password" name="password" type="password"/>

                <div className={classes.button__send}>
                    <Button>Sign In</Button>
                    <Link className={classes.link} to="/registration" >Don't have an account?</Link>
                </div>
            </div>
        </div>
    );
};

export default Authorization;