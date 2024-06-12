import React, { useEffect, useState } from 'react';
import api from '../../api';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.get('/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map(event => (
          <li key={event._id}>{event.type}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
