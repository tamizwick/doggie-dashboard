import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Thermometer from '../../components/UI/Thermometer/Thermometer';
import happyImg from '../../assets/happy.jpg';
import neutralImg from '../../assets/neutral.jpg';
import sadImg from '../../assets/sad.jpg';
import classes from './Happiness.module.css';

const Happiness = (props) => {
    let dogSrc = neutralImg;
    if (props.amount > 60) {
        dogSrc = happyImg;
    } else if (props.amount < 20) {
        dogSrc = sadImg;
    }

    return (
        <div className={classes.happiness}>
            <Thermometer externalAmount={props.amount} />
            <img src={dogSrc} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        amount: state.happinessAmount
    };
};

export default connect(mapStateToProps)(Happiness);