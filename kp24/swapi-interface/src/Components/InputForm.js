import React from 'react';

function InputForm() {
    return (
        <div className="input-form">
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="https://swapi.dev/api/people/1/"
                    aria-label="API URL"
                />
                <button className="btn btn-outline-secondary" type="button">
                    Get Info
                </button>
            </div>
        </div>
    );
}

export default InputForm;
