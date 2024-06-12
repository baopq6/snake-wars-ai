import React, { useState } from 'react';
import api from '../../api';

const TransactionForm = () => {
  const [playerId, setPlayerId] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    api.post('/transactions', { playerId, amount, currency })
      .then(response => {
        console.log(response.data);
        setPlayerId('');
        setAmount('');
        setCurrency('');
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Player ID:</label>
        <input type="text" value={playerId} onChange={(e) => setPlayerId(e.target.value)} />
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div>
        <label>Currency:</label>
        <input type="text" value={currency} onChange={(e) => setCurrency(e.target.value)} />
      </div>
      <button type="submit">Create Transaction</button>
    </form>
  );
};

export default TransactionForm;