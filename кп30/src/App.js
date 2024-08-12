import React from 'react';
import SwapiForm from './components/SwapiForm';
import SwapiInfo from './components/SwapiInfo';
import ClearButton from './components/ClearButton';

function App() {
  return (
      <div>
        <h1>SWAPI</h1>
        <SwapiForm />
        <SwapiInfo />
        <ClearButton />
      </div>
  );
}

export default App;
