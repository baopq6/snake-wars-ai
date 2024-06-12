import React, { useState, useEffect } from 'react';
import HealthBar from './HealthBar';
import SpecialSkill from './SpecialSkill';
import MiniMap from './MiniMap';
import PlayerInfo from './PlayerInfo';
import GameCanvas from './GameCanvas';

const Game = () => {
  const [health, setHealth] = useState(100);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [player, setPlayer] = useState({ username: 'Player1', score: 0 });
  const [tasks, setTasks] = useState([{ id: 1, description: 'Eat 5 food items', completed: false }]);
  const importantAreas = [{ x: 100, y: 100 }, { x: 200, y: 200 }];
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    if (player.score >= 50) {
      setTasks(prevTasks => prevTasks.map(task => task.id === 1 ? { ...task, completed: true } : task));
      setRewards([...rewards, { id: 1, description: 'Unlock new skin' }]);
    }
  }, [player.score]);

  const handleSpecialSkill = () => {
    console.log('Special Skill Activated');
  };

  return (
    <div className="game-container">
      <PlayerInfo player={player} />
      <HealthBar health={health} />
      <button className="special-skill-button" onClick={handleSpecialSkill}>Special Skill</button>
      <MiniMap position={position} importantAreas={importantAreas} />
      <GameCanvas setPlayer={setPlayer} setHealth={setHealth} />
      <div className="tasks">
        <h3>Tasks</h3>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.description} - {task.completed ? 'Completed' : 'Incomplete'}
            </li>
          ))}
        </ul>
      </div>
      <div className="rewards">
        <h3>Rewards</h3>
        <ul>
          {rewards.map(reward => (
            <li key={reward.id}>{reward.description}</li>
          ))}
        </ul>
      </div>
      <div className="score-display">
        <div>Score: {player.score}</div>
      </div>
      {health === 0 && <div className="game-over">Game Over</div>}
    </div>
  );
};

export default Game;
