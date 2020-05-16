import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './EarScratchMeter.module.css';
import useFiller from '../../hooks/filler-hook';

const EarScratchMeter = (props) => {
    const { fillAmount, increaseFillAmount, decreaseFillAmount, resetFillAmount } = useFiller(4, 10);
    const { isScratching } = props;
    const isPaused = useSelector(state => state.isPaused);
    const gameCount = useSelector(state => state.gameCount);
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
            if (fillAmount > 0 && !isScratching && !isPaused) {
                decreaseFillAmount(1);
            }
            if (fillAmount < 3 && !isScratching && !isPaused) {
                dispatch({ type: 'ITCH' });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [isScratching, decreaseFillAmount, fillAmount, dispatch, isPaused]);

    useEffect(() => {
        resetFillAmount();
    }, [gameCount, resetFillAmount]);

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