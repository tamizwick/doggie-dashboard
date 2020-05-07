import React from 'react';
import { connect } from 'react-redux';

import Thermometer from '../../components/UI/Thermometer/Thermometer';

const Happiness = (props) => {
    return (
        <Thermometer externalAmount={props.amount} />
    );
}

const mapStateToProps = (state) => {
    return {
        amount: state.happinessAmount
    };
};

export default connect(mapStateToProps)(Happiness);