import React, { useEffect, useState } from 'react';
import api from '../../api';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction._id}>{transaction.amount} {transaction.currency}</li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
