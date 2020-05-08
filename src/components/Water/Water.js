import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './Water.module.css';

import useFiller from '../../hooks/filler-hook';
import Button from '../UI/Button/Button';

const Water = (props) => {
    const { fillAmount, increaseFillAmount, decreaseFillAmount } = useFiller(20, 100);
    const { decreaseHappiness, increaseHappiness } = props;

    useEffect(() => {
        const interval = setInterval(() => fillAmount > 0 && decreaseFillAmount(7), 3000);
        return () => clearInterval(interval);
    }, [decreaseFillAmount, fillAmount])

    useEffect(() => {
        const interval = setInterval(() => {
            if (fillAmount < 20) {
                decreaseHappiness();
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [fillAmount, decreaseHappiness]);

    const fillWater = () => {
        increaseFillAmount(7);
        increaseHappiness();
    }

    let topStyle = {};
    if (fillAmount === 100) {
        topStyle = { background: '#c3edea' };
    }

    return (
        <div>
            <div className={classes.waterBowl}>
                <div className={classes.bowlTop} style={topStyle}></div>
                <div className={classes.bowlBottom}>
                    <div className={classes.water} style={{ height: fillAmount + '%' }}></div>
                </div>
            </div>
            <Button click={fillWater}>Fill Water</Button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseHappiness: () => dispatch({ type: 'WATER' }),
        decreaseHappiness: () => dispatch({ type: 'THIRST' })
    };
};

export default connect(null, mapDispatchToProps)(Water);