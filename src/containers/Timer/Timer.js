import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Timer.module.css';

const Timer = (props) => {
    const isPaused = useSelector(state => state.isPaused);
    const time = useSelector(state => state.time);
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                dispatch({ type: 'INCREMENT_TIME' });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [isPaused, dispatch]);

    return (
        <p className={classes.timer}>{String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}</p>
    );
}

export default Timer;