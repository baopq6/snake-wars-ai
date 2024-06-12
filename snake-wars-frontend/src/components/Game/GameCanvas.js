import React, { useEffect, useRef, useState } from 'react';

const GameCanvas = ({ setScore, setPosition, setHealth, nickname }) => {
  const canvasRef = useRef(null);
  const [player, setPlayer] = useState({
    x: 250, y: 250, size: 10, speed: 2, direction: { x: 0, y: 0 }, nickname: nickname
  });
  let food = { x: Math.random() * 500, y: Math.random() * 500 };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId;

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const angle = Math.atan2(mouseY - player.y, mouseX - player.x);
      player.direction = { x: Math.cos(angle), y: Math.sin(angle) };
    };

    const handleTouchMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const touch = event.touches[0];
      const touchX = touch.clientX - rect.left;
      const touchY = touch.clientY - rect.top;
      const angle = Math.atan2(touchY - player.y, touchX - player.x);
      player.direction = { x: Math.cos(angle), y: Math.sin(angle) };
    };

    const render = () => {
      // Clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Update player position
      player.x += player.direction.x * player.speed;
      player.y += player.direction.y * player.speed;

      // Draw player
      context.fillStyle = 'green';
      context.fillRect(player.x, player.y, player.size, player.size);
      context.fillStyle = 'white';
      context.fillText(player.nickname, player.x, player.y - 10);

      // Draw food
      context.fillStyle = 'red';
      context.fillRect(food.x, food.y, 5, 5);

      // Check collision with food
      if (
        player.x < food.x + 5 &&
        player.x + player.size > food.x &&
        player.y < food.y + 5 &&
        player.y + player.size > food.y
      ) {
        setScore(prevScore => prevScore + 10);
        food = { x: Math.random() * 500, y: Math.random() * 500 };
      }

      // Check collision with walls
      if (player.x < 0 || player.x + player.size > canvas.width || player.y < 0 || player.y + player.size > canvas.height) {
        setHealth(prevHealth => prevHealth - 10);
      }

      setPosition({ x: player.x, y: player.y });

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [setScore, setPosition, setHealth, player]);

  return <canvas ref={canvasRef} width="500" height="500"></canvas>;
};

export default GameCanvas;
