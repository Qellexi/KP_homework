import React from 'react';
import Header from './Components/Header';
import InputForm from './Components/InputForm';
import JsonDisplay from './Components/JsonDisplay';

function App() {
    return (
        <div className="container mt-5">
            <Header />
            <InputForm />
            <JsonDisplay />
        </div>
    );
}

export default App;
