import React from 'react';
import classes from "./Input.module.css";

const Input = ({ text, name, ...props }) => {
    return (
        <div className={classes.text_field}>
            <label className={classes.label} htmlFor={name}>{text}</label>
            <input className={classes.input} {...props} name={name} id={name}/>
        </div>
    );
};

export default Input;