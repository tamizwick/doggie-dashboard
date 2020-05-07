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
        default:
            return state;
    }
};

export default reducer;