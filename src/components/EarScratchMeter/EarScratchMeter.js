import React, { useState, useEffect } from 'react';
import classes from './EarScratchMeter.module.css';
import useFiller from '../../hooks/filler-hook';

const EarScratchMeter = (props) => {
    const [timer, setTimer] = useState(null);
    const { fillAmount, increaseFillAmount, decreaseFillAmount } = useFiller(4, 10);
    const { isScratching } = props;

    //@TODO: increaseFillAmount while isScratching is true. Why isn't useEffect working the way I want it to?

    const fullPellets = [...Array(fillAmount)].map((pellet, index) => {
        return <div className={`${classes.pellet} ${classes.fullPellet}`} key={'full' + index}></div>;
    })
    const emptyPellets = [...Array(10 - fillAmount)].map((pellet, index) => {
        return <div className={classes.pellet} key={'empty' + index}></div>;
    });
    const pellets = [
        ...fullPellets,
        ...emptyPellets
    ];

    return (
        <div className={classes.meter}>
            {pellets}
        </div>
    );
}

export default EarScratchMeter;