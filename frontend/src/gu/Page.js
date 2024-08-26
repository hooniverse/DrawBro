import React from 'react';
import './Page.css';

const Page = ({ handleButtonClick }) => { // handleButtonClick을 props로 받음
  return (
    <div className="background-container">
      <button className="center-button" onClick={handleButtonClick}>
        포토존 찾기
      </button>
    </div>
  );
};

export default Page;