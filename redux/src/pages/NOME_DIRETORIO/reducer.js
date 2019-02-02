import { ActionTypes } from './actions';

const initialState = {
    test: 1,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.[NOME]_TEST:
            return {
                ...state,
                test: state.test + 1,
            };

        default:
            return state;
    }
};