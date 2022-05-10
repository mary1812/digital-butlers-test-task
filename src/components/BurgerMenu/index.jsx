import React from 'react';
import burger from './../../assets/img/burger.png';
import './index.css';

const BurgerMenu = () => {
  return (
    <div className='burger'>
      <img src={burger} alt="burger menu"></img>
    </div>
  );
}

export default BurgerMenu;
