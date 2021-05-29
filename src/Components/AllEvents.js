import React, { useState } from "react";
import "./Events.css";
import SingleEvent from "./SingleEvent";
import Error from "./Error";

const AllEvents = () => {
  const [events, setEvents] = useState([]);

  // const API_KEY = "L6uec1PoCkdzN7Dp1iyAOPXogvXTwP5m";

  const fetchAllEvents = async () => {
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=L6uec1PoCkdzN7Dp1iyAOPXogvXTwP5m`
      );
      const data = await response.json();

      setEvents(data._embedded.events);
      console.log(events);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="button">
        <button onClick={fetchAllEvents} className="btn_events">
          Get all the music events
        </button>
      </div>
      <div className="events">
        {events.map((event) => {
          return (
            <>
              <SingleEvent event={event} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AllEvents;
