import React from 'react';
import './Header.css';
import logo from'./logo2.png';
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      
      </div>
      <div className="search-bar">
        <input type="text" placeholder="지금 핫한 축제는?" />
        <button className="search-button">🔍</button>
      </div>
      <div className="login">
        <button className="login-button">로그인</button>
      </div>
    </header>
  );
};

export default Header;