import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <button className="menu-item selected">다녀간 흔적</button>
      <button className="menu-item">QR 찍기</button>
      <button className="menu-item">관광지 정보</button>
      <button className="menu-item">축제 정보</button>
    </div>
  );
};

export default Menu;