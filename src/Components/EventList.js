import React from "react";
// import AddFavourite from "./AddFavourite";

const EventList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.events.map((event) => {
        {
          /* console.log(event.classifications[0].segment.name); */
        }
        return (
          <div className="EventList" key={event.id}>
            <p className="eventName"> {event.name}</p>
            <img className="event-image" src={event.images[0].url} alt="" />
            <div className="favourite">
              <FavouriteComponent />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EventList;
