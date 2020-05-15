import React, { useState, useEffect } from 'react';
import classes from './Timer.module.css';

const Timer = (props) => {
    const [time, setTime] = useState({
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevState) => {
                let newTime = {};
                if (prevState.seconds < 59) {
                    newTime.seconds = prevState.seconds + 1;
                    newTime.minutes = prevState.minutes;
                } else if (prevState.seconds === 59) {
                    newTime.seconds = 0;
                    newTime.minutes = prevState.minutes + 1;
                }
                return newTime;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <p className={classes.timer}>{String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}</p>
    );
}

export default Timer;