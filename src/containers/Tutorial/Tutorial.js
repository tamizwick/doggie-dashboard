import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import modalClasses from '../../components/UI/Modal/Modal.module.css';

import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import { tutorialData } from '../../assets/tutorial-data';


const Tutorial = (props) => {
    const [modalNumber, setModalNumber] = useState(0);
    const showTutorial = useSelector(state => state.showTutorial);
    const dispatch = useDispatch();

    const incrementStepNumber = () => {
        setModalNumber(modalNumber + 1);
    };

    const decrementStepNumber = () => {
        setModalNumber(modalNumber - 1);
    };

    const startGame = () => {
        dispatch({ type: 'HIDE_TUTORIAL' });
        dispatch({ type: 'UNPAUSE' });
    };

    const modals = tutorialData.map((data, index) => {
        const elements = data.additionalElements.map((el, i) => {
            switch (el.type) {
                case 'img':
                    return <img key={i} src={el.src} alt={el.alt} style={el.style} />;
                case 'button':
                    return <Button key={i} isEnabled={true} click={startGame} >{el.text}</Button>
                default:
                    return null;
            }
        });

        return (
            //@TODO: Get the left button to slide the other direction.
            //Problem is setting the classes before you know what direction the next click will be.
            <CSSTransition
                in={showTutorial}
                timeout={200}
                classNames={{
                    enterActive: modalClasses.enterFromRight,
                    exitActive: modalClasses.exitToLeft
                }}
                key={index}
                mountOnEnter
                unmountOnExit>
                <Modal
                    backdrop={true}
                    title={data.title}
                    text={data.text}
                    additionalElements={elements}
                    additionalElementsDirection={modalNumber === 1 ? 'row' : 'column'}
                    steps={tutorialData.length}
                    currentStep={modalNumber}
                    increment={incrementStepNumber}
                    decrement={decrementStepNumber} />
            </CSSTransition>
        );
    });

    return (
        <TransitionGroup>
            {modals[modalNumber]}
        </TransitionGroup>
    );
}

export default Tutorial;