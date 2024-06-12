import React from 'react';
import { useNavigate } from 'react-router-dom';

const PlayButton = () => {
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate('/games');
  };

  return (
    <button onClick={handlePlay} className="play-button">
      Play
    </button>
  );
};

export default PlayButton;
