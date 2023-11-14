import React from 'react';
import Agua from './Components/Primarios/Agua/Agua';
import Ar from './Components/Primarios/Ar/Ar';
import Fogo from './Components/Primarios/Fogo/Fogo';
import Terra from './Components/Primarios/Terra/Terra';
import Logo from "./logo.svg";
import './App.css';

export default () => (
  <div className="App">
    <header>
      <nav>
        <ul className="Lista">
          <li className="Logo">
            <img src={Logo} alt="logo" />
            <figcaption>NATURE CARDS</figcaption>
          </li>
          <ul className="Lista">
            <li className="Topics"><a className="Redirect" href="#aboutUs">Sobre o App</a></li>
            <li className="Topics"><a className="Redirect" href="#">Cartas</a></li>
            <li className="Topics"><a className="Redirect" href="#login">Criador</a></li>
          </ul>
        </ul>
      </nav>
    </header>
    <div className="Cards">
      <Agua />
      <Ar />
      <Fogo />
      <Terra />
    </div>
  </div>
);