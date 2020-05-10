import React, { useState } from 'react';
import classes from './EarScratches.module.css';

import EarScratchMeter from '../../components/EarScratchMeter/EarScratchMeter';

const EarScratches = (props) => {
    const [isScratching, setIsScratching] = useState(false);

    const scratchEar = (event) => {
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
            ></div>
            <p className={classes.scratchIndicator}>{isScratching ? 'Scratching...' : ''}</p>
        </div>
    );
}

export default EarScratches;