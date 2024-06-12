import React from 'react';

const MiniMap = ({ position, importantAreas }) => {
  return (
    <div className="mini-map">
      <div
        className="mini-map-dot"
        style={{ left: position.x, top: position.y }}
      ></div>
      {importantAreas.map((area, index) => (
        <div
          key={index}
          className="mini-map-dot"
          style={{ left: area.x, top: area.y, backgroundColor: 'blue' }}
        ></div>
      ))}
    </div>
  );
};

export default MiniMap;
