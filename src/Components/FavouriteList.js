import React from "react";

const FavouriteList = (props) => {
  return (
    <>
      {props.events.map((event, index) => {
        const venues = event._embedded.venues;
        const venue = venues.map((venue) => venue.city.name);
        const eventType = event.classifications[0].segment.name;

        return (
          <div className="eventList" key={event.id}>
            <h4 className="eventName "> {event.name}</h4>
            <p>Event: {eventType}</p>
            <p>Venue: {venue}</p>
            <img className="event-image" src={event.images[0].url} alt="" />
            <div
              className="favourite"
              onClick={() => props.handleFavouritesClick(event)}
            ></div>
            <p onClick={() => props.removeFavourite(event.id)}>
              Remove favorite
            </p>
          </div>
        );
      })}
    </>
  );
};

export default FavouriteList;
