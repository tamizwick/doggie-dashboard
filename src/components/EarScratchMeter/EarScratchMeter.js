import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import classes from './EarScratchMeter.module.css';
import useFiller from '../../hooks/filler-hook';

const EarScratchMeter = (props) => {
    const { fillAmount, increaseFillAmount, decreaseFillAmount } = useFiller(4, 10);
    const { isScratching } = props;
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            if (isScratching) {
                increaseFillAmount(1);
                dispatch({ type: 'SCRATCH' });
            }
        }, 500);
        return () => clearInterval(interval);
    }, [increaseFillAmount, isScratching, dispatch]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (fillAmount > 0 && !isScratching) {
                decreaseFillAmount(1);
            }
            if (fillAmount < 3 && !isScratching) {
                dispatch({ type: 'ITCH' });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [isScratching, decreaseFillAmount, fillAmount, dispatch]);

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

export default (EarScratchMeter);