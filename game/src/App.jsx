import React from 'react';
import Agua from './Components/Primarios/Agua/Agua';
import Ar from './Components/Primarios/Ar/Ar';
import Fogo from './Components/Primarios/Fogo/Fogo';
import Terra from './Components/Primarios/Terra/Terra';
import './App.css';

export default () => (
  <div className="App">
    <header>
      <h1>Nature Cards</h1>
    </header>
      <div className="Cards">
        <Agua />
        <Ar />
        <Fogo />
        <Terra />
      </div>
  </div>
);