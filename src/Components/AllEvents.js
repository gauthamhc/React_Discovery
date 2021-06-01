import React, { useState, useEffect } from "react";
import axios from "axios";
import EventList from "./EventList";
import EventListHeading from "./EventListHeading";
import SearchBox from "./SearchBox";
import AddFavourite from "./AddFavourite";
import FavouriteList from "./FavouriteList";
import AddRemove from "./AddRemove";

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
    const identifier = setTimeout(() => {
      fetchAllEvents(searchValue);
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [searchValue]);

  useEffect(() => {
    const eventsFav = JSON.parse(localStorage.getItem("event-fav"));
    setFavourites(eventsFav);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("event-fav", JSON.stringify(items));
  };

  const addFavouriteEvent = (event) => {
    const newFavList = [...favourites, event];
    setFavourites(newFavList);
    saveToLocalStorage(newFavList);
  };

  const removeFavouriteEvent = (event) => {
    const newFavList = favourites.filter(
      (favourite) => favourite.id !== event.id
    );
    setFavourites(newFavList);
    saveToLocalStorage(newFavList);
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
        <FavouriteList
          events={favourites}
          removeComponent={AddRemove}
          removeFavourite={removeFavouriteEvent}
        />
      </div>
    </div>
  );
};

export default AllEvents;
