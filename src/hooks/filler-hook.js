import { useState } from 'react';

const useFillThermometer = () => {
    const [fillAmount, setFillAmount] = useState(0);

    const increaseFillAmount = (increaseBy) => {
        if (fillAmount <= 100 - increaseBy) {
            setFillAmount(fillAmount + increaseBy);
        } else {
            setFillAmount(100);
        }
    };

    const decreaseFillAmount = (decreaseBy) => {
        if (fillAmount >= decreaseBy) {
            setFillAmount(fillAmount - decreaseBy);
        } else {
            setFillAmount(0);
        }
    };

    return {
        fillAmount: fillAmount,
        increaseFillAmount: increaseFillAmount,
        decreaseFillAmount: decreaseFillAmount
    }
};

export default useFillThermometer;