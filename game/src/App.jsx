import React from 'react';
import Agua from './Components/Agua/Agua';
import Ar from './Components/Ar/Ar';
import Fogo from './Components/Fogo/Fogo';
import Terra from './Components/Terra/Terra';
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