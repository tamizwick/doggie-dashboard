import React, { useState } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import { tutorialData } from '../../assets/tutorial-data';


const Tutorial = (props) => {
    const [modalNumber, setModalNumber] = useState(0);

    const incrementStepNumber = () => {
        setModalNumber(modalNumber + 1);
    };

    const decrementStepNumber = () => {
        setModalNumber(modalNumber - 1);
    };

    const modals = tutorialData.map((data, index) => {
        const elements = data.additionalElements.map((el, i) => {
            switch (el.type) {
                case 'img':
                    return <img key={i} src={el.src} alt={el.alt} />;
                case 'button':
                    // @TODO: Make the buttons do something
                    return <Button key={i} isEnabled={true} click={el.click} >{el.text}</Button>
                default:
                    return null;
            }
        });

        return (
            // @TODO: Get the modal heights to work nicely
            <Modal
                key={index}
                backdrop={true}
                title={data.title}
                text={data.text}
                additionalElements={elements}
                steps={tutorialData.length}
                currentStep={modalNumber}
                increment={incrementStepNumber}
                decrement={decrementStepNumber} />);
    });


    return (
        modals[modalNumber]
    );
}

export default Tutorial;