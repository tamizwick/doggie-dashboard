import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Timer.module.css';

import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';

const Timer = (props) => {
    const isPaused = useSelector(state => state.isPaused);
    const time = useSelector(state => state.time);
    const happinessAmount = useSelector(state => state.happinessAmount);
    const dispatch = useDispatch();
    const [modal, setModal] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                dispatch({ type: 'INCREMENT_TIME' });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [isPaused, dispatch]);

    useEffect(() => {
        const restart = () => {
            setModal(null);
            dispatch({ type: 'RESTART' });
        };

        if (happinessAmount === 0) {
            const endText = 'You kept doggie happy for:';
            const additionalElements = [
                (
                    <p key='game-timer' style={{ fontSize: '200%', margin: '0' }}>
                        {`${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`}
                    </p>
                ),
                <Button key='restart-button' isEnabled click={restart}>Play again!</Button>
            ];
            dispatch({ type: 'PAUSE' });
            setModal(<Modal
                backdrop={true}
                title='Game Over'
                text={endText}
                additionalElements={additionalElements} />);
        }
    }, [happinessAmount, dispatch, time.seconds, time.minutes]);

    return (
        <Fragment>
            <p className={classes.timer}>{String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}</p>
            {modal}
        </Fragment>
    );
}

export default Timer;