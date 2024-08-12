import axios from 'axios';

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const CLEAR_DATA = 'CLEAR_DATA';

export const fetchData = (url) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(url);
            dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: FETCH_DATA_ERROR, payload: error.message });
        }
    };
};

export const clearData = () => {
    return { type: CLEAR_DATA };
};
