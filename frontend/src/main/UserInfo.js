import React from 'react';
import './UserInfo.css';
import bo1 from './bo1.png';
import bo2 from './bo2.png';
import bo3 from './bo3.png';
const UserInfo = () => {
  return (
    <div className="user-info">
      <div className="user-greeting">
        <h2>홍길동 님, 반갑습니다!</h2>
        <p>마지막 방문 14일전</p>
      </div>
      <div className="recent-locations">
        <h3>최근 여행지</h3>
        <div className="locations">
          <div className="location">
            <img src={bo1} alt="보성" />
            <span>보성</span>
          </div>
          <div className="location">
            <img src={bo2} alt="신안" />
            <span>신안</span>
          </div>
          <div className="location">
            <img src={bo3} alt="순천" />
            <span>순천</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;