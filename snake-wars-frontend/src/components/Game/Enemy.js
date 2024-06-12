import React, { useEffect, useState } from 'react';

const Enemy = ({ canvasWidth, canvasHeight }) => {
  const [position, setPosition] = useState({ 
    x: Math.floor(Math.random() * (canvasWidth - 10)), 
    y: Math.floor(Math.random() * (canvasHeight - 10)) 
  });
  const [direction, setDirection] = useState({ x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prevPosition => {
        let newX = prevPosition.x + direction.x * 10;
        let newY = prevPosition.y + direction.y * 10;

        if (newX < 0 || newX >= canvasWidth - 10) direction.x *= -1;
        if (newY < 0 || newY >= canvasHeight - 10) direction.y *= -1;

        newX = Math.max(0, Math.min(newX, canvasWidth - 10));  // Ensure newX is within bounds
        newY = Math.max(0, Math.min(newY, canvasHeight - 10)); // Ensure newY is within bounds

        return { x: newX, y: newY };
      });
    }, 200);
    return () => clearInterval(interval);
  }, [direction, canvasWidth, canvasHeight]);

  return <div style={{ position: 'absolute', top: position.y, left: position.x, width: 10, height: 10, backgroundColor: 'black' }} />;
};

export default Enemy;
