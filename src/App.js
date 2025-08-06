import React, { useEffect, useState } from "react";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://your-backend-url/api/events")
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Event Staffing Portal</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>{event.name} — {event.location}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
