import React, { useEffect, useState } from 'react';
import api from '../../api';

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    api.get('/games')
      .then(response => setGames(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Game List</h2>
      <ul>
        {games.map(game => (
          <li key={game._id}>{game._id}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
