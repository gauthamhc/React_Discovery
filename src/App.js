import React from "react";
import "./App.css";
import "./Styles/Events.css";
import EventsHappening from "./Components/EventsHappening";

function App() {
  return (
    <div className="Container">
      <h2>Wonder Land</h2>
      <EventsHappening />
    </div>
  );
}

export default App;
