import React, { useEffect, useState } from 'react';
import api from '../api/api';

const DashboardPage = () => {
  const [playerInfo, setPlayerInfo] = useState(null);

  useEffect(() => {
    const fetchPlayerInfo = async () => {
      try {
        const response = await api.get('/player/me');
        setPlayerInfo(response.data);
      } catch (error) {
        console.error('Failed to fetch player info', error);
      }
    };

    fetchPlayerInfo();
  }, []);

  if (!playerInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Username: {playerInfo.username}</p>
      <p>Score: {playerInfo.score}</p>
    </div>
  );
};

export default DashboardPage;
