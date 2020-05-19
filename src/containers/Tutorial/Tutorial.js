import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import modalClasses from '../../components/UI/Modal/Modal.module.css';

import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import { tutorialData } from '../../assets/tutorial-data';

const Tutorial = (props) => {
    const [modalNumber, setModalNumber] = useState(0);
    const [direction, setDirection] = useState('left');
    const dispatch = useDispatch();

    const prevModalNumber = useRef();

    useEffect(() => {
        prevModalNumber.current < modalNumber || prevModalNumber.current === undefined ? setDirection('left') : setDirection('right');
        prevModalNumber.current = modalNumber;
    }, [modalNumber]);

    const incrementStepNumber = () => {
        setModalNumber(prevModalNumber => prevModalNumber + 1);
    };

    const decrementStepNumber = () => {
        setModalNumber(prevModalNumber => prevModalNumber - 1);
    };

    const startGame = () => {
        dispatch({ type: 'HIDE_TUTORIAL' });
        setTimeout(() => dispatch({ type: 'UNPAUSE' }), 650);
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
            <CSSTransition
                timeout={200}
                classNames={{
                    enterActive: modalClasses.enterActive,
                    exitActive: modalClasses.exitActive
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
        <TransitionGroup className={modalClasses[direction]}>
            {modals[modalNumber]}
        </TransitionGroup>
    );
}

export default Tutorial;