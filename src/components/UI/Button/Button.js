import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Button.module.css';

const Button = (props) => {
    const isPaused = useSelector(state => state.isPaused);
    const buttonClasses = [classes.btn, classes.primaryBtn];
    let disabled = isPaused;
    if (props.isEnabled) {
        disabled = false;
    }

    return (
        <button className={buttonClasses.join(' ')} onClick={props.click} disabled={disabled}>{props.children}</button>
    );
}

export default Button;