import React, { useState, useEffect } from 'react';
import Agua from './Components/Primarios/Agua/Agua';
import Ar from './Components/Primarios/Ar/Ar';
import Fogo from './Components/Primarios/Fogo/Fogo';
import Terra from './Components/Primarios/Terra/Terra';
import Cristal from './Components/Secundarios/Cristal/Cristal';
import Gelo from './Components/Secundarios/Gelo/Gelo';
import Lava from './Components/Secundarios/Lava/Lava';
import Raio from './Components/Secundarios/Raio/Raio';
import Verde from './Components/Especiais/Verde/Verde';
import Luz from './Components/Especiais/Luz/Luz';
import Trevas from './Components/Especiais/Trevas/Trevas';
import Logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <header>
        <div className='Logo'>
          <img src={Logo} alt='logo' />
          <p>Nature Cards</p>
        </div>
      </header>

      <main>
        <div className='Cards'>
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
        <div className='Footer-Container'>
          <div className='Footer-Sociais'>
            <a href='https://www.instagram.com/sf.vini/' className='footer-link' id='instagram'>
              <i className='fa-brands fa-instagram'></i>
            </a>
            <a href='https://github.com/ApenasoVini' className='footer-link' id='github'>
              <i className='fa-brands fa-github'></i>
            </a>
            <a href='https://www.linkedin.com/in/apenasovini/' className='footer-link' id='linkedin'>
              <i className='fa-brands fa-linkedin'></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;