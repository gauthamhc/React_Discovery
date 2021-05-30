import React, { useState } from "react";
import axios from "axios";
import "../Styles/Events.css";
import SingleEvent from "./SingleEvent";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  // const [ids, setIds] = useState([]);

  const fetchAllEvents = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}&apikey=${process.env.REACT_APP_API_KEY}`
      );
      const data = response.data;
      setEvents(data._embedded.events);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="button">
        <button onClick={fetchAllEvents} className="btn_events">
          Get all the events in the United States
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
