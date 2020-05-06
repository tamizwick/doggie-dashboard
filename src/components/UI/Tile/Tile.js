import React from 'react';
import classes from './Tile.module.css';

const tile = (props) => {
    return (
        <div className={classes.tile}>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    );
}

export default tile;