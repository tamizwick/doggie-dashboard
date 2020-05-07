import React from 'react';
import { connect } from 'react-redux';

import classes from './Food.module.css';
import useFiller from '../../hooks/filler-hook';
import Button from '../UI/Button/Button';

const Food = (props) => {
    const { fillAmount, increaseFillAmount, decreaseFillAmount } = useFiller(1, 9);

    const emptyBones = [...Array(9 - fillAmount)].map((bone, index) => <i key={'empty' + index} className=' fas fa-bone'></i>);
    const fullBones = [...Array(fillAmount)].map((bone, index) => <i key={'full' + index} className={classes.fullBone + ' fas fa-bone'}></i>);
    const bones = [
        ...emptyBones,
        ...fullBones
    ];

    const feedDog = () => {
        increaseFillAmount(1);
        if (fillAmount < 9) {
            props.increaseHappiness();
        }
    }

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
        increaseHappiness: () => dispatch({ type: 'FEED' })
    };
};

export default connect(null, mapDispatchToProps)(Food);