import React from 'react';
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import classes from './Registration.module.css';
import sign_up from '../images/sign_up.png';

const Registration = () => {
    return (
        <div className={classes.wrapper} >
            <div className={classes.container}>
                <div className={classes.images}>
                    <img src={sign_up} alt="sign_up"/>
                </div>

                <Input text="email" name="email" autocomplete="new-password" />
                <Input text="username" name="username" autocomplete="new-password" />
                <Input text="password" name="password" type="password" autocomplete="new-password" />
                <Input text="password again" name="password_again" type="password" autocomplete="new-password" />

                <div className={classes.button__send}>
                    <Button>Sign Up</Button>
                    <Link className={classes.link} to="/authorization" >Have account?</Link>
                </div>
            </div>
        </div>
    );
};

export default Registration;