import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import classes from './Modal.module.css';

const Modal = (props) => {
    const dispatch = useDispatch();

    const shouldArrowsDisplay = {
        left: false,
        right: false
    };

    if (props.steps && props.currentStep > 0) {
        shouldArrowsDisplay.left = true;
    }
    if (props.steps && props.currentStep + 1 !== props.steps) {
        shouldArrowsDisplay.right = true;
    }

    const closeModal = () => {
        dispatch({ type: 'HIDE_TUTORIAL' });
        dispatch({ type: 'UNPAUSE' });
    };

    return (
        <Fragment>
            {props.backdrop && <div className={classes.backdrop}></div>}
            <div className={classes.modal}>
                <div
                    className={[classes.arrow, classes.leftArrow].join(' ')}
                    style={{ visibility: !shouldArrowsDisplay.left ? 'hidden' : null }}
                    onClick={props.decrement}>{'<'}</div>
                <div className={classes.modalBox}>
                    <button className={classes.close} onClick={closeModal}>x</button>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                    <div className={classes.els} style={{ flexDirection: props.additionalElementsDirection }}>
                        {props.additionalElements}
                    </div>
                </div>
                <div
                    className={[classes.arrow, classes.rightArrow].join(' ')}
                    style={{ visibility: !shouldArrowsDisplay.right ? 'hidden' : null }}
                    onClick={props.increment}>{'>'}</div>
            </div>
        </Fragment>
    );
}

export default Modal;