import React, { useState } from 'react';
import './App.css';
import Roadmap from './gu/Roadmap';
import LoadingPage from './component/LoadingPage';
import MainApp from './MainApp';
import Page from './gu/Page';
import Upload from './gu/Upload'; // Upload 컴포넌트 import

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false); // 로딩 상태 관리
  const [showRoadmap, setShowRoadmap] = useState(false); // Roadmap 컴포넌트 표시 상태 관리
  const [showUpload, setShowUpload] = useState(false); // Upload 컴포넌트 표시 상태 관리

  const handleButtonClick = () => {
    setShowRoadmap(true); // 버튼 클릭 시 Roadmap 컴포넌트를 표시하도록 상태 변경
  };

  const handleUploadClick = () => {
    setShowUpload(true); // 버튼 클릭 시 Upload 컴포넌트를 표시하도록 상태 변경
  };

  return (
    <div className="app-frame">
      {showUpload ? ( // Upload 컴포넌트를 표시할지 여부에 따라 컴포넌트 렌더링 결정
        <Upload />
      ) : showRoadmap ? ( // Roadmap을 표시할지 여부에 따라 컴포넌트 렌더링 결정
        <Roadmap handleUploadClick={handleUploadClick} /> // Roadmap 컴포넌트에 클릭 핸들러 전달
      ) : loadingComplete ? (
        <Page handleButtonClick={handleButtonClick} /> // Page 컴포넌트에 클릭 핸들러 전달
      ) : (
        <LoadingPage setLoadingComplete={setLoadingComplete} /> // 로딩 페이지 표시
      )}
    </div>
  );
};

export default App;