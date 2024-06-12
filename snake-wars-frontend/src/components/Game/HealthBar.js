import React from 'react';

const HealthBar = ({ health }) => {
  return (
    <div className="health-bar">
      <div
        className="health-bar-inner"
        style={{ width: `${health}%` }}
      ></div>
    </div>
  );
};

export default HealthBar;
