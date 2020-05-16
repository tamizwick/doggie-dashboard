const initialState = {
    happinessAmount: 25,
    isPaused: true,
    time: {
        minutes: 0,
        seconds: 0
    },
    showTutorial: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FEED':
            if (state.happinessAmount + 5 <= 100) {
                return {
                    ...state,
                    happinessAmount: state.happinessAmount + 5
                };
            } else {
                return {
                    ...state,
                    happinessAmount: 100
                }
            }
        case 'HUNGER':
            if (state.happinessAmount - 10 >= 0) {
                return {
                    ...state,
                    happinessAmount: state.happinessAmount - 10
                }
            } else {
                return {
                    ...state,
                    happinessAmount: 0
                }
            }
        case 'WATER':
            if (state.happinessAmount + 3 <= 100) {
                return {
                    ...state,
                    happinessAmount: state.happinessAmount + 3
                };
            } else {
                return {
                    ...state,
                    happinessAmount: 100
                }
            }
        case 'THIRST':
            if (state.happinessAmount - 8 >= 0) {
                return {
                    ...state,
                    happinessAmount: state.happinessAmount - 8
                };
            } else {
                return {
                    ...state,
                    happinessAmount: 0
                }
            }
        case 'SCRATCH':
            if (state.happinessAmount + 3 <= 100) {
                return {
                    ...state,
                    happinessAmount: state.happinessAmount + 3
                };
            } else {
                return {
                    ...state,
                    happinessAmount: 100
                }
            }
        case 'ITCH':
            if (state.happinessAmount - 8 >= 0) {
                return {
                    ...state,
                    happinessAmount: state.happinessAmount - 8
                };
            } else {
                return {
                    ...state,
                    happinessAmount: 0
                }
            }
        case 'HIDE_TUTORIAL':
            return {
                ...state,
                showTutorial: false
            };
        case 'UNPAUSE':
            return {
                ...state,
                isPaused: false
            };
        case 'INCREMENT_TIME':
            let newTime = {};
            if (state.time.seconds < 59) {
                newTime.seconds = state.time.seconds + 1;
                newTime.minutes = state.time.minutes;
            } else if (state.time.seconds === 59) {
                newTime.seconds = 0;
                newTime.minutes = state.time.minutes + 1;
            }
            return {
                ...state,
                time: newTime
            };
        default:
            return state;
    }
};

export default reducer;