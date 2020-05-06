import React from 'react';
import classes from './Header.module.css';

const header = (props) => {
    return (
        <nav className={classes.headerNav}>
            <h1>Doggie Dashboard</h1>
        </nav>
    );
}

export default header;