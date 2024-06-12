import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
    if (nickname.trim()) {
      navigate('/game', { state: { nickname } });
    }
  };

  return (
    <div className="start-page">
      <h1>Snake Wars</h1>
      <input
        type="text"
        placeholder="Enter your nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <button onClick={handleStart}>Play</button>
    </div>
  );
};

export default StartPage;
