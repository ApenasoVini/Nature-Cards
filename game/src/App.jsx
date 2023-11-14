import React from 'react';
import Agua from './Components/Primarios/Agua/Agua';
import Ar from './Components/Primarios/Ar/Ar';
import Fogo from './Components/Primarios/Fogo/Fogo';
import Terra from './Components/Primarios/Terra/Terra';
import Logo from './logo.svg';
import './App.css';

export default () => (
  <div className="App">
    <header>
      <div className="Logo">
        <img src={Logo} alt="logo" />
        <p>NATURE CARDS</p>
      </div>
      <ul>
        <li className="Topics"><a href="#aboutUs">Sobre o App</a></li>
        <li className="Topics"><a href="#login">Criador</a></li>
      </ul>
    </header>

    <main>
      <div className="Cards">
        <Agua />
        <Ar />
        <Fogo />
        <Terra />
      </div>
    </main>
  </div>
);