import React from 'react';
import { useNavigate } from 'react-router-dom';

const Leaderboard = () => {
  const navigate = useNavigate();

  const handleLeaderboard = () => {
    navigate('/leaderboard');
  };

  return (
    <button onClick={handleLeaderboard} className="leaderboard-button">
      Leaderboard
    </button>
  );
};

export default Leaderboard;
