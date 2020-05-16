import React, { Fragment } from 'react';
import classes from './Modal.module.css';
//@TODO: React Transitions
const Modal = (props) => {
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

    return (
        <Fragment>
            {props.backdrop && <div className={classes.backdrop}></div>}
            <div className={classes.modal}>
                <div
                    className={[classes.arrow, classes.leftArrow].join(' ')}
                    style={{ visibility: !shouldArrowsDisplay.left ? 'hidden' : null }}
                    onClick={props.decrement}>{'<'}</div>
                <div className={classes.modalBox}>
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