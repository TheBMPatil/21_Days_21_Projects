// import React from "react";
import "./Search.css";

import React from "react";

const Search = ({ searchInput, search }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a movie..." 
        className="search"
        onChange={searchInput}
        onKeyPress={search} // Keeps the "Enter" functionality
      />
      <button onClick={search} className="search-button">  Search</button>
    </div>
  );
};

export default Search;
