import React from 'react';
import Header from './main/Header';
import UserInfo from './main/UserInfo';
import Menu from './main/Menu';
import Map from './main/Map';


const MainApp = () => {
  return (
    <div className="main-app">
      <Header />
      <UserInfo />
      <Menu />
      <Map />
    </div>
  );
};

export default MainApp;