import React, { useRef, useEffect, useState } from 'react';
import useAudio from '../../hooks/useAudio';
import eatSound from '../../assets/eat.mp3';
import gameOverSound from '../../assets/gameover.mp3';
import Enemy from './Enemy';

const GameCanvas = ({ setPlayer, setHealth }) => {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([{ x: 50, y: 50 }]);
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [food, setFood] = useState({ x: 100, y: 100 });
  const [enemies, setEnemies] = useState([{ x: 150, y: 150 }]);
  const [gameOver, setGameOver] = useState(false);
  const [paused, setPaused] = useState(false);
  const [score, setScore] = useState(0);
  const playEatSound = useAudio(eatSound);
  const playGameOverSound = useAudio(gameOverSound);
  const canvasWidth = 400;
  const canvasHeight = 400;

  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    const interval = setInterval(() => {
      if (!gameOver && !paused) {
        updateGame(context);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [snake, direction, gameOver, paused]);

  const updateGame = (context) => {
    const newSnake = [...snake];
    const head = { x: newSnake[0].x + direction.x * 10, y: newSnake[0].y + direction.y * 10 };
    newSnake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
      setFood({ x: Math.floor(Math.random() * canvasWidth), y: Math.floor(Math.random() * canvasHeight) });
      playEatSound();
      setScore(prevScore => {
        const newScore = prevScore + 10;
        setPlayer(player => ({ ...player, score: newScore }));
        return newScore;
      });
      setHealth(health => Math.min(100, health + 10)); // Tăng sức khỏe khi ăn thức ăn
    } else {
      newSnake.pop();
    }

    if (enemies.some(enemy => enemy.x === head.x && enemy.y === head.y)) {
      setGameOver(true);
      playGameOverSound();
      setHealth(0); // Giảm sức khỏe về 0 khi game over
      return;
    }

    if (head.x < 0 || head.x >= canvasWidth || head.y < 0 || head.y >= canvasHeight || newSnake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)) {
      setGameOver(true);
      playGameOverSound();
      setHealth(0); // Giảm sức khỏe về 0 khi game over
      return;
    }
    setSnake(newSnake);
    drawGame(context, newSnake, enemies);
  };

  const drawGame = (context, snake, enemies) => {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    const colors = ['green', 'blue', 'orange', 'purple', 'pink'];
    context.fillStyle = colors[score % colors.length];
    snake.forEach(segment => context.fillRect(segment.x, segment.y, 10, 10));
    context.fillStyle = 'red';
    context.fillRect(food.x, food.y, 10, 10);
    context.fillStyle = 'black';
    enemies.forEach(enemy => context.fillRect(enemy.x, enemy.y, 10, 10));
  };

  const handleMouseMove = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setDirectionFromPointer(x, y);
  };

  const handleTouchMove = (event) => {
    const touch = event.touches[0];
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    setDirectionFromPointer(x, y);
  };

  const setDirectionFromPointer = (x, y) => {
    const head = snake[0];
    const deltaX = x - head.x;
    const deltaY = y - head.y;
    const angle = Math.atan2(deltaY, deltaX);
    const newDirection = { x: Math.cos(angle), y: Math.sin(angle) };
    setDirection(newDirection);
  };

  const handlePauseResume = () => {
    setPaused(!paused);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ border: '1px solid #61dafb' }}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      />
      {gameOver && <div className="game-over">Game Over</div>}
      <div className="score-display">Score: {score}</div>
      <button onClick={handlePauseResume}>
        {paused ? 'Resume' : 'Pause'}
      </button>
    </div>
  );
};

export default GameCanvas;
