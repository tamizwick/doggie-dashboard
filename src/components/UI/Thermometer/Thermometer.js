import React from 'react';
import classes from './Thermometer.module.css';

import useFillThermometer from '../../../hooks/filler-hook';

const Thermometer = (props) => {
    const { fillAmount, increaseFillAmount } = useFillThermometer();

    return (
        <div className={classes.thermometer}>
            <div className={classes.tube}>
                <div className={classes.mercury} style={{ height: fillAmount + '%' }}></div>
            </div>
            <div className={classes.bulb}></div>
            <button onClick={() => increaseFillAmount(15)}>CLick</button>
        </div>
    );
}

export default Thermometer;