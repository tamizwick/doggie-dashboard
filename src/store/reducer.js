const initialState = {
    happinessAmount: 25
}

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
        default:
            return state;
    }
};

export default reducer;