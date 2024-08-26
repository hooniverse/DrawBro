import React from 'react';
import './Map.css';
import map from './map2.png';
const Map = () => {
  return (
    <div className="map-container">
      <img src={map} alt="Map" className="map-image" />
    </div>
  );
};

export default Map;