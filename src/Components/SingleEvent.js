import React from "react";

const SingleEvent = ({ event }) => {
  return (
    <>
      <div className="singleEvent" value={event.id}>
        <p className="eventName"> {event.name}</p>
        <img className="event-image" src={event.images[0].url} alt="" />
      </div>
    </>
  );
};

export default SingleEvent;
