import React from "react";

const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="eg. drama, dance, sports"
      />
    </div>
  );
};

export default SearchBox;
