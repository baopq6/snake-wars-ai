import React, { useState } from 'react';
import api from '../../api';

const EventForm = () => {
  const [type, setType] = useState('');
  const [data, setData] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    api.post('/events', { type, data: JSON.parse(data) })
      .then(response => {
        console.log(response.data);
        setType('');
        setData('');
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Type:</label>
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
      </div>
      <div>
        <label>Data:</label>
        <textarea value={data} onChange={(e) => setData(e.target.value)}></textarea>
      </div>
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
