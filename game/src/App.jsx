import React from 'react';
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
            <a href='https://www.instagram.com/sf.vini/' target='_blank' className='footer-link' id='instagram'>
              <i className='fa-brands fa-instagram'></i>
            </a>
            <a href='https://github.com/ApenasoVini' target='_blank' className='footer-link' id='github'>
              <i className='fa-brands fa-github'></i>
            </a>
            <a href='https://www.linkedin.com/in/apenasovini/' target='_blank' className='footer-link' id='linkedin'>
              <i className='fa-brands fa-linkedin'></i>
            </a>
          </div>
          <div className='Footer-App'>
            <h1>Sobre o App</h1>
            <p>
              Bem-vindo ao Nature Cards, o aplicativo que proporciona uma experiência interativa única com elementos naturais. Desenvolvido com React, o Nature Cards apresenta cartas visualmente atraentes, cada uma representando um elemento da natureza. Com um design responsivo, o aplicativo oferece uma navegação suave em qualquer dispositivo.
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
