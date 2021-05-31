import React, { useState, useEffect } from "react";
import axios from "axios";
import EventList from "./EventList";
import EventListHeading from "./EventListHeading";
import SearchBox from "./SearchBox";
import AddFavourite from "./AddFavourite";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const fetchAllEvents = async (searchValue) => {
    try {
      const response = await axios.get(
        `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${searchValue}&dmaId=324&apikey=${process.env.REACT_APP_API_KEY}`
      );
      const data = response.data;
      setEvents(data._embedded.events);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllEvents(searchValue);
  }, [searchValue]);

  const addFavouriteEvent = (event) => {
    const newFavList = [...favourites, event];
    setFavourites(newFavList);
  };

  return (
    <div>
      <EventListHeading heading="Events" />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="events">
        <EventList
          events={events}
          favouriteComponent={AddFavourite}
          handleFavouritesClick={addFavouriteEvent}
        />
      </div>
      <div>
        <EventListHeading heading="Favourites" />
      </div>
      <div className="events">
        <EventList events={favourites} />
      </div>
    </div>
  );
};

export default AllEvents;
