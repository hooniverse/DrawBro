import React, { useState, useEffect } from 'react';
import loading from'./loadingpage.png';
import './LoadingPage.css';
const LoadingPage = ({ setLoadingComplete }) => {
  useEffect(() => {
    // 3초 후에 로딩 페이지를 숨깁니다.
    const timer = setTimeout(() => {
      setLoadingComplete(true); // 로딩이 완료되었음을 설정
    }, 3000);

    // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
    return () => clearTimeout(timer);
  }, [setLoadingComplete]);

  return (
    <div className="loading-container">
      <img src={loading} alt="Loading" className="loading-image" />
    </div>
  );
};

export default LoadingPage;