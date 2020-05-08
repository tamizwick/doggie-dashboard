import React from 'react';
import classes from './Thermometer.module.css';

import useFiller from '../../../hooks/filler-hook';

const Thermometer = (props) => {
    const { fillAmount, increaseFillAmount } = useFiller();

    const externalAmount = props.externalAmount;
    let amount;
    if (externalAmount || externalAmount === 0) {
        amount = externalAmount;
    } else {
        amount = fillAmount;
    }

    return (
        <div className={classes.thermometer}>
            <div className={classes.tube}>
                <div className={classes.mercury} style={{ height: amount + '%' }}></div>
            </div>
            <div className={classes.bulb}></div>
            {!externalAmount && externalAmount !== 0 ? <button onClick={() => increaseFillAmount(15)}>Add</button> : null}
        </div>
    );
}

export default Thermometer;