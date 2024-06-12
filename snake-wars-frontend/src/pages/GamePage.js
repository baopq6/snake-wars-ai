import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GameCanvas from '../components/Game/GameCanvas';
import MiniMap from '../components/Game/MiniMap';
import Leaderboard from '../components/Game/Leaderboard';
import './GamePage.css';

const GamePage = () => {
  const location = useLocation();
  const { nickname } = location.state || { nickname: 'Player' };
  const [score, setScore] = useState(0);
  const [health, setHealth] = useState(100);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [enemies, setEnemies] = useState([{ x: 100, y: 100 }, { x: 200, y: 200 }]);
  const [leaderboardData, setLeaderboardData] = useState([
    { name: 'Player1', score: 100 },
    { name: 'Player2', score: 90 },
    { name: 'Player3', score: 80 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Cập nhật vị trí và dữ liệu bảng xếp hạng
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="game-page">
      <header>
        <h1>{nickname}</h1>
        <div>Score: {score}</div>
      </header>
      <MiniMap position={position} importantAreas={enemies} />
      <GameCanvas setScore={setScore} setPosition={setPosition} setEnemies={setEnemies} setHealth={setHealth} />
      <Leaderboard data={leaderboardData} />
    </div>
  );
};

export default GamePage;
