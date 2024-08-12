import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../redux/actions';

const SwapiForm = () => {
    const [url, setUrl] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchData(url));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter SWAPI URL"
                />
                <button type="submit">Get info</button>
            </form>
        </div>
    );
};

export default SwapiForm;
