import React, { useEffect, useState } from 'react';
import api from '../../api';

const PlayerList = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    api.get('/players')
      .then(response => setPlayers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Player List</h2>
      <ul>
        {players.map(player => (
          <li key={player._id}>{player.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
