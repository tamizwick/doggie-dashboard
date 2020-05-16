import { useState, useCallback } from 'react';

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
        if (fillAmount >= decreaseBy) {
            setFillAmount(fillAmount - decreaseBy);
        } else {
            setFillAmount(0);
        }
    };

    const resetFillAmount = useCallback(() => {
        setFillAmount(initialAmount);
    }, [initialAmount]);

    return {
        fillAmount: fillAmount,
        increaseFillAmount: increaseFillAmount,
        decreaseFillAmount: decreaseFillAmount,
        resetFillAmount: resetFillAmount
    }
};

export default useFiller;