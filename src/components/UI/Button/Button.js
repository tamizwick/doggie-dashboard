import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    const buttonClasses = [classes.btn, classes.primaryBtn];

    return (
        <button className={buttonClasses.join(' ')} onClick={props.click}>{props.children}</button>
    );
}

export default Button;