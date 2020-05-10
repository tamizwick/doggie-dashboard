import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './EarScratchMeter.module.css';
import useFiller from '../../hooks/filler-hook';

const EarScratchMeter = (props) => {
    const { fillAmount, increaseFillAmount, decreaseFillAmount } = useFiller(4, 10);
    const { isScratching, increaseHappiness, decreaseHappiness } = props;

    useEffect(() => {
        const interval = setInterval(() => {
            if (isScratching) {
                increaseFillAmount(1);
                increaseHappiness();
            }
        }, 500);
        return () => clearInterval(interval);
    }, [increaseFillAmount, increaseHappiness, isScratching]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (fillAmount > 0 && !isScratching) {
                decreaseFillAmount(1);
            }
            if (fillAmount < 3 && !isScratching) {
                decreaseHappiness();
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [isScratching, decreaseFillAmount, fillAmount, decreaseHappiness]);

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

const mapDispatchToProps = (dispatch) => {
    return {
        increaseHappiness: () => dispatch({ type: 'SCRATCH' }),
        decreaseHappiness: () => dispatch({ type: 'ITCH' })
    };
};

export default connect(null, mapDispatchToProps)(EarScratchMeter);