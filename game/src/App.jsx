import React from 'react';
import Agua from './Components/Primarios/Agua/Agua';
import Ar from './Components/Primarios/Ar/Ar';
import Fogo from './Components/Primarios/Fogo/Fogo';
import Terra from './Components/Primarios/Terra/Terra';
import Cristal from './Components/Secundarios/Cristal/Cristal'
import Gelo from './Components/Secundarios/Gelo/Gelo'
import Lava from './Components/Secundarios/Lava/Lava'
import Raio from './Components/Secundarios/Raio/Raio'
import Verde from './Components/Especiais/Verde/Verde'
import Luz from './Components/Especiais/Luz/Luz'
import Trevas from './Components/Especiais/Trevas/Trevas'
import Logo from './logo.svg';
import './App.css';

export default () => (
  <div className="App">
    <header>
      <div className="Logo">
        <img src={Logo} alt="logo" />
        <p>Nature Cards</p>
      </div>
      <ul>
        <li className="Topics"><a href="#Sobre">Sobre o App</a></li>
        <li className="Topics"><a href="#Criador">Criador</a></li>
      </ul>
    </header>

    <main>
      <div className="Cards">
        <Agua />
        <Ar />
        <Fogo />
        <Terra />
        <Raio />
        <Lava />
        <Gelo />
        <Cristal />
        <Verde />
        <Luz />
        <Trevas />
      </div>
    </main>

    <footer>
    </footer>
  </div>
);