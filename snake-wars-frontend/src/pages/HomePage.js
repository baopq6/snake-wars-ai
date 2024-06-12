import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [nickname, setNickname] = useState('');
  const history = useHistory();

  const handleStart = () => {
    if (nickname.trim()) {
      history.push({
        pathname: '/game',
        state: { nickname },
      });
    }
  };

  return (
    <div className="homepage">
      <h1>Snake Wars</h1>
      <input
        type="text"
        placeholder="Nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <button onClick={handleStart}>Play</button>
    </div>
  );
};

export default HomePage;
