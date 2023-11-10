import React from 'react';
import './Carta.css';

export default (props) => {
  const name = props.name;
  const icon = props.icon;
  const ataque = props.ataque;
  const defesa = props.defesa;

  return (
    <div className='Carta'>
      <div className='Fogo'>
        <p className='Legenda'>Fogo</p>
      </div>

      <div className='Agua'>
        <p className='Legenda'>Água</p>
      </div>

      <div className='Ar'>
        <p className='Legenda'>Ar</p>
      </div>

      <div className='Terra'>
        <p className='Legenda'>Terra</p>
      </div>
    </div>
  )
};