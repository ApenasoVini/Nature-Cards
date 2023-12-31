import React from 'react';
import Agua from './Cards/Agua';
import Ar from './Cards/Ar';
import Fogo from './Cards/Fogo';
import Terra from './Cards/Terra';
import Cristal from './Cards/Cristal';
import Gelo from './Cards/Gelo';
import Lava from './Cards/Lava';
import Raio from './Cards/Raio';
import Verde from './Cards/Verde';
import Luz from './Cards/Luz';
import Trevas from './Cards/Trevas';
import Logo from './img/logo.svg';
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
            <a href='https://www.instagram.com/sf.vini/' target='_blank' rel='noreferrer' className='footer-link' id='instagram'>
              <i className='fa-brands fa-instagram'></i>
            </a>
            <a href='https://github.com/ApenasoVini' target='_blank' rel='noreferrer' className='footer-link' id='github'>
              <i className='fa-brands fa-github'></i>
            </a>
            <a href='https://www.linkedin.com/in/apenasovini/' target='_blank' rel='noreferrer' className='footer-link' id='linkedin'>
              <i className='fa-brands fa-linkedin'></i>
            </a>
          </div>
          <div className='Footer-App'>
            <h1>Sobre o App</h1>
            <p>
              Bem-vindo ao Nature Cards, desenvolvido com React, ele apresenta cartas representando um elemento da natureza. Com um design responsivo, o aplicativo oferece uma navegação tranquila em qualquer dispositivo.
            </p>
          </div>
          <div className='Footer-Criador'>
            <h1>Sobre Mim</h1>
            <p>
              Eu sou o Vinícius, o criador do Nature Cards. Estudo desenvolvimento de sistemas e gosto bastante de jogos. O Nature Cards é um projeto que mistura meu conhecimento em desenvolvimento com meu gosto por jogos, criando uma experiência interativa para explorar elementos naturais. Espero que gostem!</p>
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
