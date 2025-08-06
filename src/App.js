import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StaffPage from "./pages/StaffPage";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL)
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
