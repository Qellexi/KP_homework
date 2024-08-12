import React from 'react';
import { useSelector } from 'react-redux';

const SwapiInfo = () => {
    const { data, error } = useSelector((state) => state);

    return (
        <div>
            {error && <p>Error: {error}</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
};

export default SwapiInfo;
