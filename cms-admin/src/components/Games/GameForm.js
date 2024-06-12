import React, { useState } from 'react';
import api from '../../api';

const GameForm = () => {
  const [state, setState] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    api.post('/games', { state })
      .then(response => {
        console.log(response.data);
        setState('');
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>State:</label>
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
      </div>
      <button type="submit">Create Game</button>
    </form>
  );
};

export default GameForm;
