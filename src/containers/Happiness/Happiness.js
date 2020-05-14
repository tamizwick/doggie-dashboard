import React from 'react';
import { useSelector } from 'react-redux';

import Thermometer from '../../components/UI/Thermometer/Thermometer';
import happyImg from '../../assets/happy.jpg';
import neutralImg from '../../assets/neutral.jpg';
import sadImg from '../../assets/sad.jpg';
import classes from './Happiness.module.css';

const Happiness = (props) => {
    const amount = useSelector(state => state.happinessAmount);

    let dogSrc = neutralImg;
    let altText = 'neutral dog face';
    if (amount > 60) {
        dogSrc = happyImg;
        altText = 'happy dog face';
    } else if (amount < 20) {
        dogSrc = sadImg;
        altText = 'sad dog face';
    }

    return (
        <div className={classes.happiness}>
            <Thermometer externalAmount={amount} />
            <img src={dogSrc} alt={altText} />
        </div>
    );
}

export default (Happiness);