import React from 'react';
import { useNavigate } from 'react-router-dom';

const Store = () => {
  const navigate = useNavigate();

  const handleStore = () => {
    navigate('/store');
  };

  return (
    <button onClick={handleStore} className="store-button">
      Store
    </button>
  );
};

export default Store;
