import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './EarScratches.module.css';

import EarScratchMeter from '../../components/EarScratchMeter/EarScratchMeter';
import ear from '../../assets/ear.jpg';

const EarScratches = (props) => {
    const [isScratching, setIsScratching] = useState(false);
    const isPaused = useSelector(state => state.isPaused);

    const scratchEar = (event) => {
        if (!isPaused) {
            const target = event.target;
            setIsScratching(true);
            let t;
            let checkForMovement = setTimeout(() => {
                endScratching(target);
            }, 500);
            target.onmousemove = () => {
                clearTimeout(checkForMovement);
                clearTimeout(t);
                t = setTimeout(() => endScratching(target), 500);
            };
            target.onmouseleave = () => endScratching(target);
        }
    };

    const endScratching = (target) => {
        target.onmousemove = null;
        target.onmouseleave = null;
        setIsScratching(prevState => {
            if (prevState) {
                return false;
            }
        });
    };

    return (
        <div className={classes.earContainer}>
            <EarScratchMeter isScratching={isScratching} />
            <div
                className={classes.ear}
                onMouseDown={scratchEar}
                onMouseUp={endScratching}
            >
                <img src={ear} className={classes.earImg} alt='dog ear' />
            </div>
            <p className={classes.scratchIndicator}>{isScratching ? 'Scratching...' : ''}</p>
        </div>
    );
}

export default EarScratches;