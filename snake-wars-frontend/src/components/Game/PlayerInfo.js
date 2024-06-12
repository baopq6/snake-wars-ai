import React from 'react';

const PlayerInfo = ({ player }) => {
  return (
    <div className="player-info">
      <h3>{player.username}</h3>
      <p>Score: {player.score}</p>
    </div>
  );
};

export default PlayerInfo;
