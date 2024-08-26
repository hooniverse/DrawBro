import React from 'react';
import Header from './component/Header';
import UserInfo from './component/UserInfo';
import Menu from './component/Menu';
import Map from './component/Map';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <UserInfo />
      <Menu />
      <Map />
    </div>
  );
};

export default App;