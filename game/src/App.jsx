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
          <div className='Footer-App'>
            <h1>Sobre o App</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className='Footer-Criador'>
            <h1>Sobre Mim</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className='Footer-Copyright'>
            <p>&copy; 2023 Nature Cards. Todos os direitos reservados.</p>
          </div>
      </footer>
    </div>
  );
};

export default App;