import React from 'react';
import { useDispatch } from 'react-redux';
import { clearData } from '../redux/actions';

const ClearButton = () => {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(clearData())}>Clear</button>
    );
};

export default ClearButton;
