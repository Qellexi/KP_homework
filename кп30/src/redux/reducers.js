import { FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, CLEAR_DATA } from './actions';

const initialState = {
    data: null,
    error: null,
};

export const swapiReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null,
            };
        case FETCH_DATA_ERROR:
            return {
                ...state,
                data: null,
                error: action.payload,
            };
        case CLEAR_DATA:
            return {
                ...state,
                data: null,
                error: null,
            };
        default:
            return state;
    }
};
