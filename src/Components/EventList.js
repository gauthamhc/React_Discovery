import React from "react";
// import AddFavourite from "./AddFavourite";

const EventList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.events.map((event, index) => {
        const venues = event._embedded.venues;
        const venue = venues.map((venue) => venue.city.name);

        return (
          <div className="eventList" key={event.id}>
            <h4 className="eventName "> {event.name}</h4>
            <p>Venue: {venue}</p>
            <img className="event-image" src={event.images[0].url} alt="" />
            <div
              className="favourite"
              onClick={() => props.handleFavouritesClick(event)}
            >
              <FavouriteComponent />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EventList;
// event.name._embedded.venues[0].state
