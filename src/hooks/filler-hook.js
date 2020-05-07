import { useState } from 'react';

const useFiller = (initialAmount, maxAmount) => {
    const [fillAmount, setFillAmount] = useState(initialAmount);

    const increaseFillAmount = (increaseBy) => {
        if (fillAmount <= maxAmount - increaseBy) {
            setFillAmount(fillAmount + increaseBy);
        } else {
            setFillAmount(maxAmount);
        }
    };

    const decreaseFillAmount = (decreaseBy) => {
        console.log('decreased')
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

export default useFiller;