import React, {useState} from 'react';
import './App.css';

import LoadingPage from './component/LoadingPage';
import MainApp from './MainApp';

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false); // 로딩 상태 관리

  return (
    <div className="app-frame">
      {loadingComplete ? (
       <MainApp/>
       // <MainApp /> // 로딩이 완료되면 메인 앱을 표시
      ) : (
        <LoadingPage setLoadingComplete={setLoadingComplete} /> // 로딩 페이지 표시
      )}
    </div>
  );
};

export default App;