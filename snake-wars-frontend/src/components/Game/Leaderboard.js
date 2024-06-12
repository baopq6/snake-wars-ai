import React from 'react';

const Leaderboard = ({ data = [{ name: 'Player1', score: 0 }] }) => { // Thêm giá trị mặc định cho data
  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ul>
        {data.map((player, index) => (
          <li key={index}>
            {player.name}: {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
