import React from 'react';
import { useNavigate } from 'react-router-dom';

const Options = () => {
  const navigate = useNavigate();

  const handleOptions = () => {
    navigate('/options');
  };

  return (
    <button onClick={handleOptions} className="options-button">
      Options
    </button>
  );
};

export default Options;
