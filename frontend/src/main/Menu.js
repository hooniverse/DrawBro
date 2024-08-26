import React from 'react';
import './Menu.css';
import Record from './menu/Record';
import './menu/Record.css';
import Information from './menu/Information';
import './menu/Information.css';
import Festival from './menu/Festival';
import './menu/Festival.css';
import Qr from './menu/Qr';
import './menu/Qr.css';
const Menu = () => {
  return (
    <div className="menu">
      <Record/>
      <Qr/>
      <Information/>
      <Festival/>
    </div>
  );
};

export default Menu;