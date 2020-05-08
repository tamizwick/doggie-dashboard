import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './Food.module.css';
import useFiller from '../../hooks/filler-hook';
import Button from '../UI/Button/Button';

const Food = (props) => {
    const { fillAmount, increaseFillAmount, decreaseFillAmount } = useFiller(1, 9);
    const { decreaseHappiness, increaseHappiness } = props;

    useEffect(() => {
        const interval = setInterval(() => fillAmount > 0 && decreaseFillAmount(1), 5000);
        return () => clearInterval(interval);
    }, [decreaseFillAmount, fillAmount]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (fillAmount < 3) {
                decreaseHappiness();
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [fillAmount, decreaseHappiness]);

    const emptyBones = [...Array(9 - fillAmount)].map((bone, index) => <i key={'empty' + index} className=' fas fa-bone'></i>);
    const fullBones = [...Array(fillAmount)].map((bone, index) => <i key={'full' + index} className={classes.fullBone + ' fas fa-bone'}></i>);
    const bones = [
        ...emptyBones,
        ...fullBones
    ];

    const feedDog = () => {
        increaseFillAmount(1);
        if (fillAmount < 9) {
            increaseHappiness();
        }
    };

    return (
        <div className={classes.food}>
            <div className={classes.foodContainer}>
                {bones}
            </div>
            <Button click={feedDog}>Feed Dog</Button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseHappiness: () => dispatch({ type: 'FEED' }),
        decreaseHappiness: () => dispatch({ type: 'HUNGER' })
    };
};

export default connect(null, mapDispatchToProps)(Food);