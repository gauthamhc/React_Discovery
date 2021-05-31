import React from "react";
import "./App.css";
import "./Styles/Events.css";
import AllEvents from "./Components/AllEvents";

function App() {
  return (
    <div className="Container">
      <h3>Wonder Land</h3>
      <AllEvents />
    </div>
  );
}

export default App;
